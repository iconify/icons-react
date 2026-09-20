import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esd06kbwj.css';
import '../../css/k/kiovtcd7k.css';
import '../../css/s/shzl3c5bz.css';
import '../../css/l/l45lyqbfi.css';
import '../../css/r/rajojkbqt.css';
import '../../css/w/wy3rob4za.css';
import '../../css/z/zc6v-l0uu.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="esd06kbwj"/><path class="kiovtcd7k"/><path class="shzl3c5bz"/><path class="l45lyqbfi"/><path class="rajojkbqt"/><path class="wy3rob4za"/><path class="zc6v-l0uu"/></g>`,
		"fallback": "thesvg-color:playwright",
	});
}

export default Component;
