import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggsvz2b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggsvz2b9f"/>`,
		"fallback": "noviair-light:tornado",
	});
}

export default Component;
