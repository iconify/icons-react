import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/i/ic3qhmgmz.css';
import '../../css/j/j697l3uzc.css';
import '../../css/z/zxhzqzbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ic3qhmgmz"/><path class="j697l3uzc"/><path class="zxhzqzbbm"/></g>`,
		"fallback": "streamline-logos:nuke-logo",
	});
}

export default Component;
