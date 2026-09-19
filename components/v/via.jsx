import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7a9fbb4a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7a9fbb4a"/>`,
		"fallback": "cryptocurrency:via",
	});
}

export default Component;
