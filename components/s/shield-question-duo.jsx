import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e4rcsvbfj.css';
import '../../css/v/v5dtwfb0w.css';
import '../../css/x/xrfn3bcyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e4rcsvbfj"/><path class="v5dtwfb0w wm-a"/><path class="xrfn3bcyz"/></g>`,
		"fallback": "withicons:shield-question-duo",
	});
}

export default Component;
