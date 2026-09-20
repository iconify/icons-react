import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbretmbtd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbretmbtd"/>`,
		"fallback": "pinhead:plane-taxiing",
	});
}

export default Component;
