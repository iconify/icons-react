import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwmxn8bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwmxn8bby"/>`,
		"fallback": "akar-icons:two-line-vertical",
	});
}

export default Component;
