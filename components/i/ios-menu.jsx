import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2pty-1kt.css';
import '../../css/c/cad1wdxuy.css';
import '../../css/n/n1y99614y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2pty-1kt"/><path class="cad1wdxuy"/><path class="n1y99614y"/>`,
		"fallback": "ion:ios-menu",
	});
}

export default Component;
