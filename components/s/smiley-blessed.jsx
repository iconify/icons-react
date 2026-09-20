import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/le_a7s62z.css';
import '../../css/j/jqn8vycdv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="le_a7s62z"/><path class="jqn8vycdv"/></g>`,
		"fallback": "streamline-flex:smiley-blessed",
	});
}

export default Component;
