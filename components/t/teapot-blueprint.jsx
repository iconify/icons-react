import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/f1lx6lbyw.css';
import '../../css/r/r3_b_1bdg.css';
import '../../css/y/ylb5ojbly.css';
import '../../css/x/xjhob3bhx.css';
import '../../css/u/u-pp__f8v.css';
import '../../css/m/mwh3xjb7u.css';
import '../../css/j/j73o9ccbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="f1lx6lbyw wm-deco"/><path class="r3_b_1bdg wm-deco"/><path class="wm-deco ylb5ojbly"/><path class="wm-k xjhob3bhx"/><path class="u-pp__f8v wm-a"/><path class="mwh3xjb7u wm-s"/><path class="j73o9ccbl wm-k"/></g>`,
		"fallback": "withicons:teapot-blueprint",
	});
}

export default Component;
