import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rclnhcb_b.css';
import '../../css/z/z9u1ekeoz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rclnhcb_b"/><path class="z9u1ekeoz"/>`,
		"fallback": "carbon:sleet",
	});
}

export default Component;
