import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ow0crubqn.css';
import '../../css/q/q7qyf_klm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ow0crubqn"/><path class="q7qyf_klm"/></g>`,
		"fallback": "glyphs:temperature-hot",
	});
}

export default Component;
