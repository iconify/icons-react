import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thd_9hsjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thd_9hsjg"/>`,
		"fallback": "typcn:leaf",
	});
}

export default Component;
