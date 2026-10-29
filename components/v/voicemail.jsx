import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wjwwm-bhb.css';
import '../../css/n/nl66y9men.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wjwwm-bhb"/><path class="nl66y9men wm-a"/></g>`,
		"fallback": "withicons:voicemail",
	});
}

export default Component;
