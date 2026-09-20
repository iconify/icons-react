import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/s/s3o08qbdd.css';
import '../../css/q/qjn58vyge.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="s3o08qbdd"/><path class="qjn58vyge"/></g>`,
		"fallback": "skill-icons:vim-dark",
	});
}

export default Component;
