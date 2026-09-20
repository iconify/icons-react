import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu7er63ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu7er63ka"/>`,
		"fallback": "typcn:ticket",
	});
}

export default Component;
