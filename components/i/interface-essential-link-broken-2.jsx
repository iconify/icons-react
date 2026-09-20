import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdm4r8b8q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdm4r8b8q"/>`,
		"fallback": "streamline-pixel:interface-essential-link-broken-2",
	});
}

export default Component;
