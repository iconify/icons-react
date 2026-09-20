import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp47-_m7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp47-_m7t"/>`,
		"fallback": "ri:signal-cellular-3-fill",
	});
}

export default Component;
