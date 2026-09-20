import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5921bc9b.css';
import '../../css/u/uijq5ybza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5921bc9b"/><path class="uijq5ybza"/>`,
		"fallback": "token:skl",
	});
}

export default Component;
