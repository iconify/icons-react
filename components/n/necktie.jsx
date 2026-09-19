import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajosvfg_r.css';
import '../../css/j/jkp0e3b_t.css';
import '../../css/g/gm8nafrka.css';
import '../../css/t/tu1r6vbbz.css';
import '../../css/z/zu4mj3bxg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajosvfg_r"/><path class="jkp0e3b_t"/><path class="gm8nafrka"/><path class="tu1r6vbbz"/><path class="zu4mj3bxg"/></g>`,
		"fallback": "fluent-emoji-flat:necktie",
	});
}

export default Component;
