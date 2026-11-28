import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bzd85mb1e.css';
import '../../css/s/si_kdro5v.css';
import '../../css/t/t9_fncbua.css';
import '../../css/b/bva54-bib.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/f/feq4zxb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bzd85mb1e"/><path class="si_kdro5v"/><path class="t9_fncbua"/><path class="bva54-bib"/><path class="zrlh-6b7n"/><path class="feq4zxb1f"/></g>`,
		"fallback": "iconaut:semaphore-horizontal",
	});
}

export default Component;
