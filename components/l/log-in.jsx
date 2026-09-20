import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzu7m7bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzu7m7bqs"/>`,
		"fallback": "lucide:log-in",
	});
}

export default Component;
