import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ekyw6c0tl.css';
import '../../css/l/lmglw5bzf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ekyw6c0tl"/><path class="lmglw5bzf"/></g>`,
		"fallback": "glyphs:tag",
	});
}

export default Component;
