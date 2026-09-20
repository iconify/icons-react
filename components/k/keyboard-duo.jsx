import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8flcdbca.css';
import '../../css/f/fftvyjblg.css';
import '../../css/c/ctxkj15yf.css';
import '../../css/y/yv95--bei.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8flcdbca"/><path class="fftvyjblg"/><path class="ctxkj15yf"/><path class="yv95--bei"/></g>`,
		"fallback": "streamline-kameleon-color:keyboard-duo",
	});
}

export default Component;
