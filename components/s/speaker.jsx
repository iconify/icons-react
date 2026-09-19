import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d4jw9nboq.css';
import '../../css/h/hh22srh1i.css';
import '../../css/p/p94o0ic_w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d4jw9nboq"/><path class="hh22srh1i"/><path class="p94o0ic_w"/></g>`,
		"fallback": "glyphs:speaker",
	});
}

export default Component;
