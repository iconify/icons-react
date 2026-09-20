import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3b1ydbto.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3b1ydbto"/>`,
		"fallback": "pinhead:roman-numeral-i",
	});
}

export default Component;
