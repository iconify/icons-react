import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7ykdnb4c.css';
import '../../css/b/bv8dp7-9q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7ykdnb4c"/><path class="bv8dp7-9q"/>`,
		"fallback": "streamline-pixel:real-estate-building-1",
	});
}

export default Component;
