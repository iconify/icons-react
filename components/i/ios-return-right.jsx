import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx_j74_gu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx_j74_gu"/>`,
		"fallback": "ion:ios-return-right",
	});
}

export default Component;
