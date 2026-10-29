import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go8zk9zko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go8zk9zko"/>`,
		"fallback": "withicons:teddy-bear-solid",
	});
}

export default Component;
