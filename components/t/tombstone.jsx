import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv1r_vbwa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv1r_vbwa"/>`,
		"fallback": "game-icons:tombstone",
	});
}

export default Component;
