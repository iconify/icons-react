import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqi8_vb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqi8_vb5r"/>`,
		"fallback": "iconoir:sparks",
	});
}

export default Component;
