import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grmy6--qt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grmy6--qt"/>`,
		"fallback": "ion:ios-share-alt",
	});
}

export default Component;
