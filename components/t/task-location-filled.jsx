import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_hxwwbci.css';
import '../../css/u/urkgciarb.css';
import '../../css/s/s4vr5dbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_hxwwbci"/><path class="urkgciarb"/><path class="s4vr5dbrf"/>`,
		"fallback": "tdesign:task-location-filled",
	});
}

export default Component;
