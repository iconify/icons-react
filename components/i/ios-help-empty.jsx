import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5vf289bg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5vf289bg"/>`,
		"fallback": "ion:ios-help-empty",
	});
}

export default Component;
