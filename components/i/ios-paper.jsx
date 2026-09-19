import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb2unwdfl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb2unwdfl"/>`,
		"fallback": "ion:ios-paper",
	});
}

export default Component;
