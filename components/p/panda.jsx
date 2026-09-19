import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bo6vubllt.css';
import '../../css/t/tpvsr3cen.css';
import '../../css/u/uls873tdy.css';
import '../../css/c/cnpmbwbgj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bo6vubllt"/><path class="tpvsr3cen"/><path class="uls873tdy"/><path class="cnpmbwbgj"/></g>`,
		"fallback": "fluent-emoji-flat:panda",
	});
}

export default Component;
