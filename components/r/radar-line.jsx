import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek9gtazpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek9gtazpr"/>`,
		"fallback": "ri:radar-line",
	});
}

export default Component;
