import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofnqb8bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofnqb8bqy"/>`,
		"fallback": "lucide:star-half",
	});
}

export default Component;
