import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nod_500mb.css';
import '../../css/q/qb37dcqql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nod_500mb"/><path class="qb37dcqql"/>`,
		"fallback": "lucide-extended:screen-share-filled",
	});
}

export default Component;
