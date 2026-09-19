import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjqfd70iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjqfd70iz"/>`,
		"fallback": "hugeicons:navigation-off",
	});
}

export default Component;
