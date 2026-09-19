import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmejnq0yw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmejnq0yw"/>`,
		"fallback": "ion:ios-bookmark",
	});
}

export default Component;
