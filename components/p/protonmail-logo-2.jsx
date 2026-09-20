import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xmhrcp_tz.css';
import '../../css/f/f190kxybj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="xmhrcp_tz"/><path class="f190kxybj"/></g>`,
		"fallback": "streamline-logos:protonmail-logo-2",
	});
}

export default Component;
