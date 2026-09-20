import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9-zoz4is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9-zoz4is"/>`,
		"fallback": "tdesign:system-code-filled",
	});
}

export default Component;
