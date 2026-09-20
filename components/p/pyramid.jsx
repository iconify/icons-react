import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed8jw0b9n.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed8jw0b9n"/>`,
		"fallback": "picon:pyramid",
	});
}

export default Component;
