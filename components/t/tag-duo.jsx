import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c4zeuubly.css';
import '../../css/e/e61c4pwgm.css';
import '../../css/d/dyl9j_8su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c4zeuubly"/><path class="e61c4pwgm wm-a"/><path class="dyl9j_8su"/></g>`,
		"fallback": "withicons:tag-duo",
	});
}

export default Component;
