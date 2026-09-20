import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p87xovnnb.css';
import '../../css/q/q-dytabox.css';
import '../../css/v/vpq2_mram.css';
import '../../css/q/qxwfwqbzf.css';

const viewBox = {"width":290,"height":79};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGQ7PYvesg)" clip-rule="evenodd" class="p87xovnnb"/><path clip-rule="evenodd" class="q-dytabox"/><defs><linearGradient id="SVGQ7PYvesg" x1="27.91" x2="57.331" y1="53.872" y2="32.653" gradientUnits="userSpaceOnUse"><stop offset=".288" class="vpq2_mram"/><stop offset="1" class="qxwfwqbzf"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:polygon-io-light",
	});
}

export default Component;
