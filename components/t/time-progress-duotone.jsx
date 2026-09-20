import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoitpkywi.css';
import '../../css/j/j4nqo-26l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoitpkywi"/><path class="j4nqo-26l"/>`,
		"fallback": "lets-icons:time-progress-duotone",
	});
}

export default Component;
