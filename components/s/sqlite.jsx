import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxptrhd-x.css';

const viewBox = {"width":458,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxptrhd-x"/>`,
		"fallback": "file-icons:sqlite",
	});
}

export default Component;
