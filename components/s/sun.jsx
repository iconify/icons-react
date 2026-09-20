import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b7j7gyb3w.css';
import '../../css/y/yh__sq91y.css';
import '../../css/h/hnwjkvvhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b7j7gyb3w"/><path class="yh__sq91y"/><path class="hnwjkvvhz"/></g>`,
		"fallback": "streamline-cyber-color:sun",
	});
}

export default Component;
