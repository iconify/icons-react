import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpbws8lvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpbws8lvo"/>`,
		"fallback": "lucide:message-square-dashed",
	});
}

export default Component;
