import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk-bc8b7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk-bc8b7s"/>`,
		"fallback": "ri:shield-check-fill",
	});
}

export default Component;
