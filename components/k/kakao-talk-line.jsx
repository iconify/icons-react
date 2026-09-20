import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdd12bcok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdd12bcok"/>`,
		"fallback": "ri:kakao-talk-line",
	});
}

export default Component;
