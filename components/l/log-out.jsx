import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqfdu9byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqfdu9byr"/>`,
		"fallback": "lucide:log-out",
	});
}

export default Component;
