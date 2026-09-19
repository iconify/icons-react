import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exs-2eb4s.css';
import '../../css/c/cv680t3gn.css';
import '../../css/g/gs46m-avx.css';
import '../../css/e/e_k1zj_sq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="exs-2eb4s"/><path class="cv680t3gn"/><path class="gs46m-avx"/><path class="e_k1zj_sq"/></g>`,
		"fallback": "icon-park-outline:soccer-one",
	});
}

export default Component;
