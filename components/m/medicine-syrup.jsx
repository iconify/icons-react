import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7-rbsbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7-rbsbtb"/>`,
		"fallback": "tabler:medicine-syrup",
	});
}

export default Component;
