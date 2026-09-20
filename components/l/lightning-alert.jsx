import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em58hzb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em58hzb2f"/>`,
		"fallback": "mdi:lightning-alert",
	});
}

export default Component;
