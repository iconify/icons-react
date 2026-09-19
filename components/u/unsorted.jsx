import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmffgr_ni.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmffgr_ni"/>`,
		"fallback": "fa7-solid:unsorted",
	});
}

export default Component;
