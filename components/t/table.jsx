import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezq_5gb1n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezq_5gb1n"/>`,
		"fallback": "la:table",
	});
}

export default Component;
