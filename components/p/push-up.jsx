import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8qa1w28i.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8qa1w28i"/>`,
		"fallback": "system-uicons:push-up",
	});
}

export default Component;
