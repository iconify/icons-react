import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j068v3bze.css';
import '../../css/n/nl66y9men.css';
import '../../css/w/wjwwm-bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j068v3bze"/><path class="nl66y9men wm-a"/><path class="wjwwm-bhb"/></g>`,
		"fallback": "withicons:voicemail-duo",
	});
}

export default Component;
