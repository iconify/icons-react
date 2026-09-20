import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jklz1kt1b.css';
import '../../css/a/awbaqxbwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jklz1kt1b"/><path class="awbaqxbwl"/>`,
		"fallback": "selfhst:password-pusher-dark",
	});
}

export default Component;
