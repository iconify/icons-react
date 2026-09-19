import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_efqme5x.css';

const viewBox = {"width":666,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_efqme5x"/>`,
		"fallback": "ls:linkedin",
	});
}

export default Component;
