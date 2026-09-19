import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fgn08uzgx.css';
import '../../css/z/zurxubcxo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fgn08uzgx"/><path class="zurxubcxo"/></g>`,
		"fallback": "glyphs:palette",
	});
}

export default Component;
