import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g325givei.css';
import '../../css/z/z9rr_ubxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g325givei"/><path class="z9rr_ubxh"/>`,
		"fallback": "octicon:sidebar-collapse-24",
	});
}

export default Component;
