import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt9b5egoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt9b5egoi"/>`,
		"fallback": "mynaui:panel-top-inactive",
	});
}

export default Component;
