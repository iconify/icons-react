import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q1vm2qsnu.css';
import '../../css/a/atto44bao.css';
import '../../css/h/hlw3r33xs.css';
import '../../css/y/yjt7y95ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q1vm2qsnu"/><path class="atto44bao wm-a"/><path class="hlw3r33xs"/><path class="wm-a yjt7y95ow"/></g>`,
		"fallback": "withicons:potted-plant-duo",
	});
}

export default Component;
