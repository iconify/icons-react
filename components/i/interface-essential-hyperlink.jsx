import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlr20m9qu.css';
import '../../css/a/av3hfsqru.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlr20m9qu"/><path class="av3hfsqru"/>`,
		"fallback": "streamline-pixel:interface-essential-hyperlink",
	});
}

export default Component;
