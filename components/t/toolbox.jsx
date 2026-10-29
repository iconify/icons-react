import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kpgvotblb.css';
import '../../css/v/v6yzk-b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kpgvotblb"/><path class="v6yzk-b5c wm-a"/></g>`,
		"fallback": "withicons:toolbox",
	});
}

export default Component;
