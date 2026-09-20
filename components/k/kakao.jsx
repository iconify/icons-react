import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsl7p9qal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsl7p9qal"/>`,
		"fallback": "thesvg-color:kakao",
	});
}

export default Component;
