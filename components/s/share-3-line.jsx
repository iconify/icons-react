import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poyhed4yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poyhed4yu"/>`,
		"fallback": "mingcute:share-3-line",
	});
}

export default Component;
