import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k30f9wu5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k30f9wu5q"/>`,
		"fallback": "mdi:relation-one-to-zero-or-one",
	});
}

export default Component;
