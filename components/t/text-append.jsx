import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko-5hi22e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko-5hi22e"/>`,
		"fallback": "f7:text-append",
	});
}

export default Component;
