import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhxn8lbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhxn8lbfh"/>`,
		"fallback": "gridicons:share-computer",
	});
}

export default Component;
