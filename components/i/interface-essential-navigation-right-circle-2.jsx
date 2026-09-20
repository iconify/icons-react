import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4m2uyb8w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4m2uyb8w"/>`,
		"fallback": "streamline-pixel:interface-essential-navigation-right-circle-2",
	});
}

export default Component;
