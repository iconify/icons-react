import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hpa0eudhu.css';
import '../../css/k/kg-u_fb3q.css';
import '../../css/d/d9tuwubhk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hpa0eudhu"/><path class="kg-u_fb3q"/><path class="d9tuwubhk"/></g>`,
		"fallback": "streamline:mobile-phone-camera",
	});
}

export default Component;
