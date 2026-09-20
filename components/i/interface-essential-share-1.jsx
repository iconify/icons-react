import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz6iieisr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz6iieisr"/>`,
		"fallback": "streamline-pixel:interface-essential-share-1",
	});
}

export default Component;
