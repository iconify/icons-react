import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp_f6gbzm.css';
import '../../css/q/qp5hhjbxf.css';
import '../../css/r/r9f97sbnp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp_f6gbzm"/><path class="qp5hhjbxf"/><path class="r9f97sbnp"/>`,
		"fallback": "openmoji:pie",
	});
}

export default Component;
