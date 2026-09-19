import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rfrnaqb9j.css';
import '../../css/z/zk1d_9bxj.css';
import '../../css/u/urc6g4bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rfrnaqb9j"/><path class="zk1d_9bxj"/><path class="urc6g4bov"/></g>`,
		"fallback": "hugeicons:waste",
	});
}

export default Component;
