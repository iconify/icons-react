import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo14_sr-k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo14_sr-k"/>`,
		"fallback": "garden:menu-fill-16",
	});
}

export default Component;
