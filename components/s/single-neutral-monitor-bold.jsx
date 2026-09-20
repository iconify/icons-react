import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiwa63bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiwa63bvo"/>`,
		"fallback": "streamline-ultimate:single-neutral-monitor-bold",
	});
}

export default Component;
