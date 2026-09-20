import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uff_9unyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uff_9unyb"/>`,
		"fallback": "ri:number-1",
	});
}

export default Component;
