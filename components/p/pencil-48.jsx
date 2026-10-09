import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo64yvbkk.css';
import '../../css/r/r5qp9ebil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo64yvbkk"/><path class="r5qp9ebil"/>`,
		"fallback": "energy-icons:pencil-48",
	});
}

export default Component;
