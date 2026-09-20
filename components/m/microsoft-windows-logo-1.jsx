import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zpjmlyb6u.css';
import '../../css/b/bnu31fboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zpjmlyb6u"/><path class="bnu31fboh"/></g>`,
		"fallback": "streamline-logos:microsoft-windows-logo-1",
	});
}

export default Component;
