import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7port6eh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7port6eh"/>`,
		"fallback": "pinhead:two-people-above-car",
	});
}

export default Component;
