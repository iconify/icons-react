import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at-r0qa-j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at-r0qa-j"/>`,
		"fallback": "fluent-mdl2:issue-tracking",
	});
}

export default Component;
