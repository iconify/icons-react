import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/lkfp6obbh.css';
import '../../css/b/b_gdiub7l.css';
import '../../css/h/htlk_kphf.css';
import '../../css/q/qh-5srbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="lkfp6obbh"/><path class="b_gdiub7l"/><path class="htlk_kphf"/><path class="qh-5srbvu"/></g>`,
		"fallback": "streamline-sharp-color:stamp",
	});
}

export default Component;
