import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da49kcg0i.css';
import '../../css/x/xdwstclco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da49kcg0i"/><path class="xdwstclco"/>`,
		"fallback": "mingcute:red-packet-fill",
	});
}

export default Component;
