import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zmcihobyu.css';
import '../../css/y/yzt9e6hpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zmcihobyu"/><path class="yzt9e6hpz"/></g>`,
		"fallback": "streamline-logos:mastodon-logo-1",
	});
}

export default Component;
