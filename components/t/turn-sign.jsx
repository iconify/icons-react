import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t5_-0cbfa.css';
import '../../css/o/o2exp-bvg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t5_-0cbfa"/><path class="o2exp-bvg"/></g>`,
		"fallback": "glyphs:turn-sign",
	});
}

export default Component;
