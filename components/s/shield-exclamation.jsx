import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l_05vcb9p.css';
import '../../css/a/aduzg2ber.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l_05vcb9p"/><path class="aduzg2ber"/></g>`,
		"fallback": "glyphs:shield-exclamation",
	});
}

export default Component;
