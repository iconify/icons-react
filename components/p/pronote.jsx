import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twtj5ebts.css';
import '../../css/y/yg0gmx-wy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="twtj5ebts"/><path class="yg0gmx-wy"/>`,
		"fallback": "selfhst:pronote",
	});
}

export default Component;
