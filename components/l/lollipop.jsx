import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov13c6xvm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov13c6xvm"/>`,
		"fallback": "fluent-emoji-high-contrast:lollipop",
	});
}

export default Component;
