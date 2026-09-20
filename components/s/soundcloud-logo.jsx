import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/su5rmfboh.css';
import '../../css/j/jxc3szl7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="su5rmfboh"/><path class="jxc3szl7u"/></g>`,
		"fallback": "streamline-logos:soundcloud-logo",
	});
}

export default Component;
