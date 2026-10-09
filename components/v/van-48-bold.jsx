import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0vijabpk.css';
import '../../css/k/k-uhcsbrk.css';
import '../../css/z/z9__b873h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0vijabpk"/><path class="k-uhcsbrk"/><path class="z9__b873h"/>`,
		"fallback": "energy-icons:van-48-bold",
	});
}

export default Component;
