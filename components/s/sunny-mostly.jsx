import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fgzt733zg.css';
import '../../css/b/b7joi2bai.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fgzt733zg"/><path class="b7joi2bai"/></g>`,
		"fallback": "glyphs:sunny-mostly",
	});
}

export default Component;
