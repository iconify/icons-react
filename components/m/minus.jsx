import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvbdow_er.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvbdow_er"/>`,
		"fallback": "fluent-emoji-high-contrast:minus",
	});
}

export default Component;
