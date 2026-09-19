import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ay7mymb3n.css';
import '../../css/b/b7b9r_wxs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ay7mymb3n"/><path class="b7b9r_wxs"/></g>`,
		"fallback": "glyphs:microscope",
	});
}

export default Component;
