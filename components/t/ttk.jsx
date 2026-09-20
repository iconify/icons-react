import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx27k-jtf.css';
import '../../css/n/ngwmr6pgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx27k-jtf"/><path class="ngwmr6pgi"/>`,
		"fallback": "token:ttk",
	});
}

export default Component;
