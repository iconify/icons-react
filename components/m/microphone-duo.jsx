import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m1i7o_bwx.css';
import '../../css/v/vnrag9skx.css';
import '../../css/m/mozr6bcby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m1i7o_bwx"/><path class="vnrag9skx"/><path class="mozr6bcby wm-a"/></g>`,
		"fallback": "withicons:microphone-duo",
	});
}

export default Component;
