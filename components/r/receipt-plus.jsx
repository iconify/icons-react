import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enbnuf7yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enbnuf7yi"/>`,
		"fallback": "noviair:receipt-plus",
	});
}

export default Component;
