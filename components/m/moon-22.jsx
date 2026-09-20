import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdexfqlzv.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdexfqlzv"/>`,
		"fallback": "wi:moon-22",
	});
}

export default Component;
