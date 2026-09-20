import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc0e-ibjd.css';
import '../../css/y/ye74rhbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc0e-ibjd"/><path class="ye74rhbyz"/>`,
		"fallback": "typcn:social-tumbler-circular",
	});
}

export default Component;
