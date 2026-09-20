import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-v0owbtv.css';
import '../../css/e/ebu833blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-v0owbtv"/><path class="ebu833blj"/>`,
		"fallback": "token:prism",
	});
}

export default Component;
