import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf86hnbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf86hnbfm"/>`,
		"fallback": "mingcute:sydney-opera-house-line",
	});
}

export default Component;
