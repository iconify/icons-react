import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejq_vxbcb.css';
import '../../css/q/qcygcjg0a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejq_vxbcb"/><path class="qcygcjg0a"/>`,
		"fallback": "ion:ios-chatboxes-outline",
	});
}

export default Component;
