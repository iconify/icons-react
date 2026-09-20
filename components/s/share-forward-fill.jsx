import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9-rvbopt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9-rvbopt"/>`,
		"fallback": "mingcute:share-forward-fill",
	});
}

export default Component;
