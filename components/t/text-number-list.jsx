import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh020cc2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh020cc2m"/>`,
		"fallback": "proicons:text-number-list",
	});
}

export default Component;
