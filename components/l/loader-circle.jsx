import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tm7e-xcyz.css';
import '../../css/c/chg4zfb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tm7e-xcyz"/><path class="chg4zfb0d"/></g>`,
		"fallback": "withicons-retro:loader-circle",
	});
}

export default Component;
