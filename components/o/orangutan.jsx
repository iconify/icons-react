import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5oij-dlm.css';
import '../../css/t/tk3xhxbdb.css';
import '../../css/r/rn79-hb7z.css';
import '../../css/z/zsiptgbsu.css';
import '../../css/z/z90-3t_3d.css';
import '../../css/k/ks5_odbfr.css';
import '../../css/n/ntwg3-w6b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5oij-dlm"/><path class="tk3xhxbdb"/><path class="rn79-hb7z"/><path class="zsiptgbsu"/><path class="z90-3t_3d"/><path class="ks5_odbfr"/><path class="ntwg3-w6b"/></g>`,
		"fallback": "fluent-emoji-flat:orangutan",
	});
}

export default Component;
