import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jaixtfbft.css';
import '../../css/v/vl8mzgb2w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jaixtfbft"/><path class="vl8mzgb2w"/></g>`,
		"fallback": "glyphs:ticket-1",
	});
}

export default Component;
