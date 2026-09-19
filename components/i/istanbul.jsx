import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb41g0omf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb41g0omf"/>`,
		"fallback": "file-icons:istanbul",
	});
}

export default Component;
