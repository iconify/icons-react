import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6tv-82-z.css';
import '../../css/u/uufe-4b8s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6tv-82-z"/><path class="uufe-4b8s"/>`,
		"fallback": "carbon:view-next",
	});
}

export default Component;
