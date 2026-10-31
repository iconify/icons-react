import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y70uvobzb.css';
import '../../css/t/tgddnbvvm.css';
import '../../css/u/umueoon4l.css';
import '../../css/k/ky6e2lbaq.css';
import '../../css/v/vqq-je3nh.css';
import '../../css/v/v2thwlyeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow y70uvobzb"/><path class="tgddnbvvm"/><path class="umueoon4l"/><path class="ky6e2lbaq"/><path class="vqq-je3nh"/><path class="v2thwlyeg wm-s"/></g>`,
		"fallback": "withicons-retro:stamp",
	});
}

export default Component;
