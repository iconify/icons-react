import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbj5q2eai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbj5q2eai"/>`,
		"fallback": "lucide:share",
	});
}

export default Component;
