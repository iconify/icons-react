import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-sf72b8f.css';
import '../../css/r/r7hpw1bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i-sf72b8f"/><path class="r7hpw1bur"/></g>`,
		"fallback": "healthicons:liver-alt-24px",
	});
}

export default Component;
