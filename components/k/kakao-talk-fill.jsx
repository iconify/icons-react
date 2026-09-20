import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqqxnqb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqqxnqb5l"/>`,
		"fallback": "ri:kakao-talk-fill",
	});
}

export default Component;
