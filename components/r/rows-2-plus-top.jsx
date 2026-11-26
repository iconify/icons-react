import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyfmq7b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyfmq7b7u"/>`,
		"fallback": "lucide:rows-2-plus-top",
	});
}

export default Component;
