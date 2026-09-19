import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h988dbzhz.css';
import '../../css/k/k9a6unbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h988dbzhz"/><path class="k9a6unbxx"/></g>`,
		"fallback": "hugeicons:straight-edge",
	});
}

export default Component;
