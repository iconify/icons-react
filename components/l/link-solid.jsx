import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf17-sblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf17-sblb"/>`,
		"fallback": "withicons:link-solid",
	});
}

export default Component;
