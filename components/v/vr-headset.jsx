import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amn_b-_3e.css';
import '../../css/l/l0j9ifqvz.css';
import '../../css/e/es-579fjp.css';
import '../../css/p/pp3ljlbns.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/l/l0bn-3b4l.css';
import '../../css/v/vwy3m2tao.css';
import '../../css/k/kn7o87bdq.css';
import '../../css/e/e9yznkbhb.css';
import '../../css/b/b0-ke2c7w.css';
import '../../css/f/f-mrb1b6o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amn_b-_3e"/><path class="l0j9ifqvz"/><path class="es-579fjp"/><path class="pp3ljlbns"/><g class="sxsjrzbyv"><g class="l0bn-3b4l"><path class="vwy3m2tao"/><path class="kn7o87bdq"/><path class="e9yznkbhb"/></g><path class="b0-ke2c7w"/><path class="f-mrb1b6o"/></g>`,
		"fallback": "openmoji:vr-headset",
	});
}

export default Component;
