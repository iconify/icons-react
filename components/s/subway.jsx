import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l58qa_ptf.css';
import '../../css/k/kbbipeb2c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l58qa_ptf"/><path class="kbbipeb2c"/></g>`,
		"fallback": "glyphs:subway",
	});
}

export default Component;
