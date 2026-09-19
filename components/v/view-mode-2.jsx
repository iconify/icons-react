import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3u1j7bqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3u1j7bqt"/>`,
		"fallback": "carbon:view-mode-2",
	});
}

export default Component;
