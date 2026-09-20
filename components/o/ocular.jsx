import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2nhvg7mm.css';
import '../../css/n/ny4n5ccbx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2nhvg7mm"/><path class="ny4n5ccbx"/>`,
		"fallback": "selfhst:ocular",
	});
}

export default Component;
