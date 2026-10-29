import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi6mtemnd.css';
import '../../css/s/sl8tcp1uu.css';
import '../../css/m/m00bsdb2c.css';
import '../../css/a/a6hwve_iz.css';
import '../../css/j/jf54_fdmr.css';
import '../../css/x/xftggvusy.css';
import '../../css/f/fscdgqbfj.css';
import '../../css/n/neib7jbrk.css';
import '../../css/k/k924-sbrs.css';
import '../../css/z/zfgs3dtyt.css';
import '../../css/c/c80kak1ov.css';
import '../../css/m/m-eeb9wak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi6mtemnd wm-shadow"/><path class="sl8tcp1uu"/><path class="m00bsdb2c"/><path class="a6hwve_iz"/><path class="jf54_fdmr"/><path class="wm-shine xftggvusy"/><path class="fscdgqbfj"/><path class="neib7jbrk"/><path class="k924-sbrs"/><path class="zfgs3dtyt"/><path class="c80kak1ov wm-shine"/><path class="m-eeb9wak"/>`,
		"fallback": "withicons-plush:key",
	});
}

export default Component;
