import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2firwxhd.css';
import '../../css/h/hla--sikh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2firwxhd"/><path class="hla--sikh"/>`,
		"fallback": "streamline-pixel:shopping-shipping-warehouse-truck-delivery",
	});
}

export default Component;
