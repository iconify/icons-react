import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px37m5f4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px37m5f4f"/>`,
		"fallback": "simple-icons:substack",
	});
}

export default Component;
