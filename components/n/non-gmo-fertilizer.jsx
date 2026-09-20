import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0nb7cc6b.css';
import '../../css/o/o3ain3blr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0nb7cc6b"/><path class="o3ain3blr"/>`,
		"fallback": "streamline-pixel:non-gmo-fertilizer",
	});
}

export default Component;
