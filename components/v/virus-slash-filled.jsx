import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ain1iwb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ain1iwb1s"/>`,
		"fallback": "boxicons:virus-slash-filled",
	});
}

export default Component;
