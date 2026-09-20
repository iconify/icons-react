import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kip8j-bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kip8j-bqf"/>`,
		"fallback": "tabler:receipt-pound-filled",
	});
}

export default Component;
