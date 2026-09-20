import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-1idhbof.css';
import '../../css/j/jodh5db0p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-1idhbof"/><path clip-rule="evenodd" class="jodh5db0p"/>`,
		"fallback": "qlementine-icons:system-monitor-16",
	});
}

export default Component;
