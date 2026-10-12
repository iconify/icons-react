import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-alhcbxd.css';
import '../../css/i/ifa3sbbtd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-alhcbxd"/><path class="ifa3sbbtd"/>`,
		"fallback": "energy-icons:memory-chip-20",
	});
}

export default Component;
