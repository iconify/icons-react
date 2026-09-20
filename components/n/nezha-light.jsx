import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvstrjjvh.css';
import '../../css/e/e_k2sgbhu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvstrjjvh"/><path class="e_k2sgbhu"/>`,
		"fallback": "selfhst:nezha-light",
	});
}

export default Component;
