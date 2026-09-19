import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/expm53boj.css';
import '../../css/g/gxdfmzjck.css';
import '../../css/h/hw0kxtbhp.css';
import '../../css/p/pifh3f0yj.css';
import '../../css/o/oquvwwkbu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="expm53boj"/><path class="gxdfmzjck"/><circle class="hw0kxtbhp"/><circle class="pifh3f0yj"/><path class="oquvwwkbu"/></g>`,
		"fallback": "icon-park-solid:tabletennis",
	});
}

export default Component;
