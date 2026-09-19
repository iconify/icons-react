import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s52488q7t.css';
import '../../css/d/d58ezqogs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s52488q7t"/><path class="d58ezqogs"/>`,
		"fallback": "carbon:virtual-desktop",
	});
}

export default Component;
