import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fun_vac3e.css';
import '../../css/m/ml1gkv3_g.css';
import '../../css/i/iotmsoplq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="fun_vac3e"/><path class="ml1gkv3_g"/><path class="iotmsoplq"/></g>`,
		"fallback": "matita:rotate-ccw",
	});
}

export default Component;
