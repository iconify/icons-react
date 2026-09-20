import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw2lm8b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw2lm8b8p"/>`,
		"fallback": "mynaui:letter-x-hexagon",
	});
}

export default Component;
