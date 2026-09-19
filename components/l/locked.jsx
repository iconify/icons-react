import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kj_mg6-kn.css';
import '../../css/t/t7fo56b7x.css';
import '../../css/b/btlyaxjfz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kj_mg6-kn"/><path class="t7fo56b7x"/><path class="btlyaxjfz"/></g>`,
		"fallback": "fluent-emoji-flat:locked",
	});
}

export default Component;
