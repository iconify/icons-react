import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/guxh3kbks.css';
import '../../css/k/kxaa53mkw.css';
import '../../css/j/jne0vqbiu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="guxh3kbks"/><path clip-rule="evenodd" class="kxaa53mkw"/><path class="jne0vqbiu"/></g>`,
		"fallback": "glyphs-poly:street-view",
	});
}

export default Component;
