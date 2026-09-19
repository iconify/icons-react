import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k0kduccvl.css';
import '../../css/h/h8k8trncu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k0kduccvl"/><path class="h8k8trncu"/></g>`,
		"fallback": "glyphs:lightning",
	});
}

export default Component;
