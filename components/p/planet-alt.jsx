import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/c/c2fyz9s3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="hwsal5q-o"/><path class="c2fyz9s3o"/></g>`,
		"fallback": "iconoir:planet-alt",
	});
}

export default Component;
