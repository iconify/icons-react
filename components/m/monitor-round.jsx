import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt9su1b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt9su1b-k"/>`,
		"fallback": "coolicons:monitor-round",
	});
}

export default Component;
