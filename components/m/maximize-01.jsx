import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebce-tb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebce-tb7u"/>`,
		"fallback": "hugeicons:maximize-01",
	});
}

export default Component;
