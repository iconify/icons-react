import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/ncr4y8hbl.css';
import '../../css/z/ze5g_h5ii.css';
import '../../css/d/d6uq56b0l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ncr4y8hbl"/><path class="ze5g_h5ii"/><path class="d6uq56b0l"/></g>`,
		"fallback": "glyphs:layer-group",
	});
}

export default Component;
