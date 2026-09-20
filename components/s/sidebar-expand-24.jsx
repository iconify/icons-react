import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-q9jk35j.css';
import '../../css/z/z9rr_ubxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-q9jk35j"/><path class="z9rr_ubxh"/>`,
		"fallback": "octicon:sidebar-expand-24",
	});
}

export default Component;
