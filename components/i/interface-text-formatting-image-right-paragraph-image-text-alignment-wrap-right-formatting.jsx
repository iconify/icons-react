import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p64lgabpt.css';
import '../../css/b/b21do6byx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p64lgabpt"/><rect transform="rotate(-180 10.5 4)" class="b21do6byx"/></g>`,
		"fallback": "streamline:interface-text-formatting-image-right-paragraph-image-text-alignment-wrap-right-formatting",
	});
}

export default Component;
