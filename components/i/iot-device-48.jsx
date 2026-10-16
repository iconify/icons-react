import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svwgtwb6l.css';
import '../../css/x/xwg4fnbby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svwgtwb6l"/><path class="xwg4fnbby"/>`,
		"fallback": "energy-icons:iot-device-48",
	});
}

export default Component;
