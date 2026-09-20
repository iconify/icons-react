import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaha0obqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaha0obqe"/>`,
		"fallback": "ix:tag-safety-filled",
	});
}

export default Component;
