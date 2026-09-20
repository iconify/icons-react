import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au2dbgp3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au2dbgp3t"/>`,
		"fallback": "mingcute:kakao-talk-line",
	});
}

export default Component;
