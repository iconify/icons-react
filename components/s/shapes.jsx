import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqz39y55m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqz39y55m"/>`,
		"fallback": "boxicons:shapes",
	});
}

export default Component;
