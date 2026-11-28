import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sazs_obtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sazs_obtv"/>`,
		"fallback": "noviair-light:newspaper-star",
	});
}

export default Component;
