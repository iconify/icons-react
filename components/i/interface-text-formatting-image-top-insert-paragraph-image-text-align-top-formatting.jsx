import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bpan5tc-q.css';
import '../../css/w/w4sd5pbjg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bpan5tc-q"/><rect transform="rotate(-90 7 2.5)" class="w4sd5pbjg"/></g>`,
		"fallback": "streamline:interface-text-formatting-image-top-insert-paragraph-image-text-align-top-formatting",
	});
}

export default Component;
