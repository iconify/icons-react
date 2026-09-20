import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw8askbty.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw8askbty"/>`,
		"fallback": "pinhead:transit-vehicle",
	});
}

export default Component;
