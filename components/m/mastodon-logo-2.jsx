import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zmcihobyu.css';
import '../../css/k/kk-kjccss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zmcihobyu"/><path class="kk-kjccss"/></g>`,
		"fallback": "streamline-logos:mastodon-logo-2",
	});
}

export default Component;
