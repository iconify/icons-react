import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v-s61_hbp.css';
import '../../css/j/jcebyzq_d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v-s61_hbp"/><path class="jcebyzq_d"/></g>`,
		"fallback": "glyphs:watch",
	});
}

export default Component;
