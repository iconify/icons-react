import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z_bo8yb6h.css';
import '../../css/y/y349j2fkf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z_bo8yb6h"/><path class="y349j2fkf"/></g>`,
		"fallback": "glyphs:path",
	});
}

export default Component;
