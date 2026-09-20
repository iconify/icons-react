import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/skyyumbdq.css';
import '../../css/a/ac8-dlbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="skyyumbdq"/><path class="ac8-dlbok"/></g>`,
		"fallback": "streamline-ultimate:usb-port-1",
	});
}

export default Component;
