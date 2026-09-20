import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuw-xeb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuw-xeb1v"/>`,
		"fallback": "streamline-ultimate:time-clock-circle-bold",
	});
}

export default Component;
