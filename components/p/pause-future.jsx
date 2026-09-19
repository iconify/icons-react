import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llwq-7b3r.css';
import '../../css/u/uufe-4b8s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llwq-7b3r"/><path class="uufe-4b8s"/>`,
		"fallback": "carbon:pause-future",
	});
}

export default Component;
