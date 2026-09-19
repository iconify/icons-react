import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogq3rih2l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogq3rih2l"/>`,
		"fallback": "carbon:square-outline",
	});
}

export default Component;
