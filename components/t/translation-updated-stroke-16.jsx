import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfdo2-b2q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfdo2-b2q"/>`,
		"fallback": "garden:translation-updated-stroke-16",
	});
}

export default Component;
