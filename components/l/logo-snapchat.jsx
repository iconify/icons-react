import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8t6515-e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8t6515-e"/>`,
		"fallback": "streamline-pixel:logo-snapchat",
	});
}

export default Component;
