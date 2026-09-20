import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rfl0hybpn.css';
import '../../css/t/t2cscwrbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="rfl0hybpn"/><path class="t2cscwrbb"/></g>`,
		"fallback": "streamline-logos:kakao-talk-logo",
	});
}

export default Component;
