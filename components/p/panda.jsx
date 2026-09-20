import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_es2wzdn.css';
import '../../css/j/jbm7ubcxn.css';
import '../../css/b/b-waoerrw.css';
import '../../css/c/ck6sdqbkp.css';
import '../../css/n/n44qfl4eh.css';
import '../../css/s/se506vbgv.css';
import '../../css/n/n93g78bsq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_es2wzdn"/><path class="jbm7ubcxn"/><circle class="b-waoerrw"/><path class="ck6sdqbkp"/><path class="n44qfl4eh"/><circle class="se506vbgv"/><path class="n93g78bsq"/>`,
		"fallback": "openmoji:panda",
	});
}

export default Component;
