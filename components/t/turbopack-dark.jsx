import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfhq29bew.css';
import '../../css/a/a4f0l1p7f.css';
import '../../css/j/j303azbjc.css';
import '../../css/m/m8zyjccjk.css';
import '../../css/y/y5fb0lpcu.css';
import '../../css/o/ojj18acah.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wfhq29bew"/><path fill="url(#SVGENwNWb2A)" class="a4f0l1p7f"/><path fill="url(#SVGENwNWb2A)" class="j303azbjc"/><path fill="url(#SVGENwNWb2A)" class="m8zyjccjk"/><defs><linearGradient id="SVGENwNWb2A" x1="54.917" x2="5.699" y1="7.031" y2="55.915" gradientUnits="userSpaceOnUse"><stop class="y5fb0lpcu"/><stop offset="1" class="ojj18acah"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:turbopack-dark",
	});
}

export default Component;
