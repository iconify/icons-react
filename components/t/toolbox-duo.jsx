import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iswkj4buy.css';
import '../../css/v/v6yzk-b5c.css';
import '../../css/k/kpgvotblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="iswkj4buy"/><path class="v6yzk-b5c wm-a"/><path class="kpgvotblb"/></g>`,
		"fallback": "withicons:toolbox-duo",
	});
}

export default Component;
