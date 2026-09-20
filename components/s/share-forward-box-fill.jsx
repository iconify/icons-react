import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiuto9r3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiuto9r3x"/>`,
		"fallback": "ri:share-forward-box-fill",
	});
}

export default Component;
