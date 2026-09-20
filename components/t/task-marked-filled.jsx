import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_hxwwbci.css';
import '../../css/n/nd9qslmdc.css';
import '../../css/q/q9vu7mxpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_hxwwbci"/><path class="nd9qslmdc"/><path class="q9vu7mxpv"/>`,
		"fallback": "tdesign:task-marked-filled",
	});
}

export default Component;
