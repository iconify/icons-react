import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny8rlnbhx.css';
import '../../css/o/o684edcxc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny8rlnbhx"/><path class="o684edcxc"/>`,
		"fallback": "selfhst:mediamtx",
	});
}

export default Component;
