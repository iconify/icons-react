import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq3v-ebal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq3v-ebal"/>`,
		"fallback": "mingcute:moon-sleep-fill",
	});
}

export default Component;
