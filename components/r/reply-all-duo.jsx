import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d12-a_mpa.css';
import '../../css/q/qrfll9i5r.css';
import '../../css/g/gi1w600zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d12-a_mpa"/><path class="qrfll9i5r"/><path class="gi1w600zg"/></g>`,
		"fallback": "iconaut:reply-all-duo",
	});
}

export default Component;
