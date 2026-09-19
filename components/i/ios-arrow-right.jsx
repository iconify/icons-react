import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di3tuvepm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di3tuvepm"/>`,
		"fallback": "ion:ios-arrow-right",
	});
}

export default Component;
