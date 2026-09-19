import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h73t7xb3u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h73t7xb3u"/>`,
		"fallback": "ep:promotion",
	});
}

export default Component;
