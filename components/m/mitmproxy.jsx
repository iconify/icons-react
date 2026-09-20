import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwwsb4kdp.css';
import '../../css/y/ylvsggrtp.css';
import '../../css/m/mj3qn8bcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lwwsb4kdp"/><path class="ylvsggrtp"/><path class="mj3qn8bcu"/>`,
		"fallback": "selfhst:mitmproxy",
	});
}

export default Component;
