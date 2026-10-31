import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c6blu2bsw.css';
import '../../css/g/gp_5-hnyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c6blu2bsw"/><path class="gp_5-hnyw"/></g>`,
		"fallback": "withicons-retro:sigma",
	});
}

export default Component;
