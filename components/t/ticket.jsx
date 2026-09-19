import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp_aarktq.css';
import '../../css/u/uy9bf6bqn.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp_aarktq"/><path class="uy9bf6bqn"/>`,
		"fallback": "foundation:ticket",
	});
}

export default Component;
