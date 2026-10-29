import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsvigrbgh.css';
import '../../css/f/fc-kwxboe.css';
import '../../css/z/zxxmof9pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsvigrbgh wm-shadow"/><path class="fc-kwxboe wm-k"/><path class="wm-k zxxmof9pf"/>`,
		"fallback": "withicons-pastel:loader-circle",
	});
}

export default Component;
