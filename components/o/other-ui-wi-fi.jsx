import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk1ibeynv.css';
import '../../css/y/yettion4e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk1ibeynv"/><path class="yettion4e"/>`,
		"fallback": "streamline-block:other-ui-wi-fi",
	});
}

export default Component;
