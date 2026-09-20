import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp2_b80ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp2_b80ur"/>`,
		"fallback": "ri:message-ai-3-fill",
	});
}

export default Component;
