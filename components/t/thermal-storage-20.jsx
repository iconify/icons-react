import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjfogtdwu.css';
import '../../css/s/s315aabjr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjfogtdwu"/><path class="s315aabjr"/>`,
		"fallback": "energy-icons:thermal-storage-20",
	});
}

export default Component;
