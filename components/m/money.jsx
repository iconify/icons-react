import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9itsabhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9itsabhm"/>`,
		"fallback": "gridicons:money",
	});
}

export default Component;
