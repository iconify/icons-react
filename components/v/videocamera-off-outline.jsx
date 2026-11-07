import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh82fib1q.css';
import '../../css/j/jvt0l2akk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh82fib1q"/><path clip-rule="evenodd" class="jvt0l2akk"/>`,
		"fallback": "solar:videocamera-off-outline",
	});
}

export default Component;
