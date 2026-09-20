import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbf2j5b6e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbf2j5b6e"/>`,
		"fallback": "pinhead:q",
	});
}

export default Component;
