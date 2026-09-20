import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/ko4okmb8h.css';
import '../../css/z/zu_k2vzqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ko4okmb8h"/><path class="zu_k2vzqo"/></g>`,
		"fallback": "streamline-logos:twitch-logo",
	});
}

export default Component;
