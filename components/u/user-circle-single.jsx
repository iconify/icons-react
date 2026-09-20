import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a_6hqwexs.css';
import '../../css/l/le_a7s62z.css';
import '../../css/f/fqp2h7ofc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a_6hqwexs"/><path class="le_a7s62z"/><path class="fqp2h7ofc"/></g>`,
		"fallback": "streamline-flex:user-circle-single",
	});
}

export default Component;
