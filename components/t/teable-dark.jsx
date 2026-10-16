import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4diduj_c.css';
import '../../css/j/jgbxvgbak.css';
import '../../css/y/y8dmk5bor.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n4diduj_c"/><path clip-rule="evenodd" class="jgbxvgbak"/><path class="y8dmk5bor"/></g>`,
		"fallback": "thesvg-color:teable-dark",
	});
}

export default Component;
