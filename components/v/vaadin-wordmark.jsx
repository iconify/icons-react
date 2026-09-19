import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwqxb2ble.css';
import '../../css/d/dibzppbzl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwqxb2ble"/><path class="dibzppbzl"/>`,
		"fallback": "devicon:vaadin-wordmark",
	});
}

export default Component;
