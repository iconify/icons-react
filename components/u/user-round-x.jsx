import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf8q1_utc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf8q1_utc"/>`,
		"fallback": "vadivam:user-round-x",
	});
}

export default Component;
