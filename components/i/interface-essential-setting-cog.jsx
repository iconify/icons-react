import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc5li9bka.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc5li9bka"/>`,
		"fallback": "streamline-pixel:interface-essential-setting-cog",
	});
}

export default Component;
