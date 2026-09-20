import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-v9j-zlm.css';
import '../../css/t/tsvt3bbpr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-v9j-zlm"/><path class="tsvt3bbpr"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-25-percent-1",
	});
}

export default Component;
