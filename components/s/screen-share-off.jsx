import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxk2j9btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxk2j9btb"/>`,
		"fallback": "lucide:screen-share-off",
	});
}

export default Component;
