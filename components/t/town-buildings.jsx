import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4kf3rbrv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4kf3rbrv"/>`,
		"fallback": "pinhead:town-buildings",
	});
}

export default Component;
