import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/urwkllb7a.css';
import '../../css/w/wk9sgxnft.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="urwkllb7a"/><path class="wk9sgxnft"/></g>`,
		"fallback": "glyphs:smile",
	});
}

export default Component;
