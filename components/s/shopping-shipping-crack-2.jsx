import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnr0oobqh.css';
import '../../css/g/gudgw0b7v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnr0oobqh"/><path class="gudgw0b7v"/>`,
		"fallback": "streamline-pixel:shopping-shipping-crack-2",
	});
}

export default Component;
