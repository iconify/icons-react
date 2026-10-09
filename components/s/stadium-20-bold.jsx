import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjozgk1xh.css';
import '../../css/v/vfyr6kgzz.css';
import '../../css/w/w-aohegfl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjozgk1xh"/><path class="vfyr6kgzz"/><path class="w-aohegfl"/>`,
		"fallback": "energy-icons:stadium-20-bold",
	});
}

export default Component;
