import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z4sdxeb8i.css';
import '../../css/g/gbj84w86o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z4sdxeb8i"/><path class="gbj84w86o"/></g>`,
		"fallback": "glyphs:pharmacy",
	});
}

export default Component;
