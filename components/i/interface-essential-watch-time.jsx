import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adx82e9yy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adx82e9yy"/>`,
		"fallback": "streamline-pixel:interface-essential-watch-time",
	});
}

export default Component;
