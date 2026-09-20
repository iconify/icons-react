import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj5nrubhr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj5nrubhr"/>`,
		"fallback": "osmic:parking-bicycle-14",
	});
}

export default Component;
