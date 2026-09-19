import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejwoc6wpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejwoc6wpd"/>`,
		"fallback": "boxicons:polygon-filled",
	});
}

export default Component;
