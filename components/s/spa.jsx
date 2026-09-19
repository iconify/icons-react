import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nkv115b_c.css';
import '../../css/h/hogzoqbfn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nkv115b_c"/><path class="hogzoqbfn"/></g>`,
		"fallback": "glyphs:spa",
	});
}

export default Component;
