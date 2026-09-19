import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fif97fbjb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fif97fbjb"/>`,
		"fallback": "codicon:repo-pinned",
	});
}

export default Component;
