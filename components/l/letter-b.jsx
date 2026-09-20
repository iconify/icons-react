import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekc2a9bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekc2a9bdo"/>`,
		"fallback": "mynaui:letter-b",
	});
}

export default Component;
