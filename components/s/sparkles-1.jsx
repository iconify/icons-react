import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctmlb8_7m.css';
import '../../css/c/cd00vabay.css';
import '../../css/h/hl1t43cng.css';
import '../../css/i/i6p_zx0xf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ctmlb8_7m"><path class="cd00vabay"/><path class="hl1t43cng"/><path class="i6p_zx0xf"/></g>`,
		"fallback": "glyphs-poly:sparkles-1",
	});
}

export default Component;
