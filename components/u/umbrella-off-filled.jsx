import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvdzlxb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvdzlxb9y"/>`,
		"fallback": "lucide-extended:umbrella-off-filled",
	});
}

export default Component;
