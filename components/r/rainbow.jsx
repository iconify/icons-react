import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5vtxobjr.css';
import '../../css/y/ycummybdd.css';
import '../../css/k/k6-b_obwq.css';
import '../../css/v/vx42e2f3d.css';
import '../../css/b/bf19-2bti.css';
import '../../css/c/cpvkljb2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5vtxobjr"/><path class="ycummybdd"/><path class="k6-b_obwq"/><path class="vx42e2f3d"/><path class="bf19-2bti"/><path class="cpvkljb2k"/>`,
		"fallback": "fxemoji:rainbow",
	});
}

export default Component;
