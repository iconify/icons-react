import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6iikjgcv.css';
import '../../css/g/g4hcowb-j.css';
import '../../css/a/aw7_0cj1p.css';
import '../../css/c/c3fsi-axi.css';
import '../../css/t/tqn0pzxzh.css';
import '../../css/s/s8i5hbzru.css';
import '../../css/r/rb_bf_bcy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6iikjgcv"/><circle class="g4hcowb-j"/><path class="aw7_0cj1p"/><circle class="c3fsi-axi"/><path class="tqn0pzxzh"/><path class="s8i5hbzru"/><path class="rb_bf_bcy"/>`,
		"fallback": "openmoji:sleeping-face",
	});
}

export default Component;
