import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py0v7ob5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py0v7ob5i"/>`,
		"fallback": "mynaui:slash-octagon-solid",
	});
}

export default Component;
