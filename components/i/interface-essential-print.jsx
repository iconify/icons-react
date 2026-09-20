import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zchtgcboh.css';
import '../../css/i/i1-lcibyb.css';
import '../../css/i/i5-w2mb4f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zchtgcboh"/><path class="i1-lcibyb"/><path class="i5-w2mb4f"/>`,
		"fallback": "streamline-pixel:interface-essential-print",
	});
}

export default Component;
