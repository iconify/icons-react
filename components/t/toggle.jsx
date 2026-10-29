import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pjqa07bbp.css';
import '../../css/s/skqzgzjwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pjqa07bbp"/><path class="skqzgzjwd wm-a"/></g>`,
		"fallback": "withicons:toggle",
	});
}

export default Component;
