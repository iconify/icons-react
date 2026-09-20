import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxxzk5b7h.css';
import '../../css/c/c06gyab9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxxzk5b7h"/><path class="c06gyab9i"/>`,
		"fallback": "streamline-pixel:interface-essential-refresh",
	});
}

export default Component;
