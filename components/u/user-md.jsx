import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtc51tboh.css';

const viewBox = {"width":1408,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtc51tboh"/>`,
		"fallback": "fa:user-md",
	});
}

export default Component;
