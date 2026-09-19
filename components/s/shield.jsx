import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtdbs_u4l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtdbs_u4l"/>`,
		"fallback": "fluent-emoji-high-contrast:shield",
	});
}

export default Component;
