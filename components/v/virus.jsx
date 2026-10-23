import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq8ixpuvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq8ixpuvz"/>`,
		"fallback": "vadivam:virus",
	});
}

export default Component;
