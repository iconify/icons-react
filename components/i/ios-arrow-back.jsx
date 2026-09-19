import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcb8w2bmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcb8w2bmr"/>`,
		"fallback": "ion:ios-arrow-back",
	});
}

export default Component;
