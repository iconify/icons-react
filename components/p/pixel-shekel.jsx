import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbiqz1utc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbiqz1utc"/>`,
		"fallback": "pinhead:pixel-shekel",
	});
}

export default Component;
