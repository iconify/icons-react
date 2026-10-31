import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nprm3ac8a.css';
import '../../css/n/n1sxjmb4w.css';
import '../../css/l/lcefl6b8o.css';
import '../../css/c/cgda8mbuj.css';
import '../../css/t/tw5-qzb3b.css';
import '../../css/h/h5_irpkkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nprm3ac8a wm-shadow"/><path class="n1sxjmb4w"/><path class="lcefl6b8o"/><path class="cgda8mbuj"/><path class="tw5-qzb3b"/><path class="h5_irpkkq"/></g>`,
		"fallback": "withicons-retro:milk",
	});
}

export default Component;
