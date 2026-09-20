import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7kjhxbwx.css';
import '../../css/k/kk94g-bkd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7kjhxbwx"/><path class="kk94g-bkd"/>`,
		"fallback": "streamline-pixel:interface-essential-hierarchy-5",
	});
}

export default Component;
