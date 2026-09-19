import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2ap08bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2ap08bdd"/>`,
		"fallback": "boxicons:motorcycle-filled",
	});
}

export default Component;
