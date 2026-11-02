import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l55_2bcdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l55_2bcdk"/>`,
		"fallback": "mingcute:wallet-4-fill",
	});
}

export default Component;
