import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lejfyq1sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lejfyq1sj"/>`,
		"fallback": "keyline-icons:send-clock-sharp",
	});
}

export default Component;
