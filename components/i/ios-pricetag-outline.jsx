import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klcn6tchx.css';
import '../../css/n/ng1infulf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klcn6tchx"/><path class="ng1infulf"/>`,
		"fallback": "ion:ios-pricetag-outline",
	});
}

export default Component;
