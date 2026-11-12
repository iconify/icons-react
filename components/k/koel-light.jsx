import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7ckltoed.css';
import '../../css/q/qmqaxfynj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7ckltoed"/><path class="qmqaxfynj"/>`,
		"fallback": "selfhst:koel-light",
	});
}

export default Component;
