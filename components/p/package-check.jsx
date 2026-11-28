import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrkj-jswk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrkj-jswk"/>`,
		"fallback": "noviair-light:package-check",
	});
}

export default Component;
