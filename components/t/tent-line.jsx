import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5lhf0b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5lhf0b7p"/>`,
		"fallback": "ri:tent-line",
	});
}

export default Component;
