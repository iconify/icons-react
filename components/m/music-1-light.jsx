import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0j3glb_n.css';
import '../../css/l/lio3osqhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="f0j3glb_n"/><path class="lio3osqhe"/></g>`,
		"fallback": "iconamoon:music-1-light",
	});
}

export default Component;
