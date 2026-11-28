import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndwtwom7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndwtwom7p"/>`,
		"fallback": "noviair:trophy-star",
	});
}

export default Component;
