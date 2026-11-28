import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aloh6-bal.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x7ia4kp7x.css';
import '../../css/d/d0jwgjpuu.css';
import '../../css/b/bst2jobme.css';
import '../../css/p/pzxc_4bsf.css';
import '../../css/g/ga17unzci.css';
import '../../css/p/ph1beofzl.css';
import '../../css/t/t7k_4tl3e.css';
import '../../css/g/gjfva4bfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aloh6-bal secondary"/><g class="dt0cm9dhy primary"><path class="x7ia4kp7x"/><path class="d0jwgjpuu"/><path class="bst2jobme"/><path class="pzxc_4bsf"/><path class="ga17unzci"/><path class="ph1beofzl"/><path class="t7k_4tl3e"/><path class="gjfva4bfk"/></g>`,
		"fallback": "iconaut:vector-skew-duo",
	});
}

export default Component;
