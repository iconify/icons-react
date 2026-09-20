import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svt111btq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svt111btq"/>`,
		"fallback": "streamline-pixel:music-disk-cd-2",
	});
}

export default Component;
