import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfqqx6mhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfqqx6mhr"/>`,
		"fallback": "coolicons:table-fill-round",
	});
}

export default Component;
