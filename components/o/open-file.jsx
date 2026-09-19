import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9ty8jb1l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9ty8jb1l"/>`,
		"fallback": "fluent-mdl2:open-file",
	});
}

export default Component;
