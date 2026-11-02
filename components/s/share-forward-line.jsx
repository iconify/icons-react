import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz8plk1ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz8plk1ki"/>`,
		"fallback": "mingcute:share-forward-line",
	});
}

export default Component;
