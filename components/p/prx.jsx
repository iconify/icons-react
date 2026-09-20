import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xarwckbam.css';
import '../../css/x/xakjq2afu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xarwckbam"/><path class="xakjq2afu"/>`,
		"fallback": "token:prx",
	});
}

export default Component;
