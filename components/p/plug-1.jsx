import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fcwhaq_op.css';
import '../../css/j/j2ufr04in.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fcwhaq_op"/><path class="j2ufr04in"/></g>`,
		"fallback": "glyphs:plug-1",
	});
}

export default Component;
