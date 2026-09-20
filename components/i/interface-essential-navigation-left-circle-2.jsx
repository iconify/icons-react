import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uckz_1f4d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uckz_1f4d"/>`,
		"fallback": "streamline-pixel:interface-essential-navigation-left-circle-2",
	});
}

export default Component;
