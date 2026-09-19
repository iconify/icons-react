import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqpv4kv7o.css';
import '../../css/y/yza-ddcnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uqpv4kv7o"/><path class="yza-ddcnn"/></g>`,
		"fallback": "iconamoon:star-duotone",
	});
}

export default Component;
