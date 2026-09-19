import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjr-_su-k.css';
import '../../css/l/l_cw2_bvk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjr-_su-k"/><path class="l_cw2_bvk"/>`,
		"fallback": "carbon:message-queue",
	});
}

export default Component;
