import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onfg9s0lo.css';
import '../../css/l/l1tk6nbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onfg9s0lo"/><path class="l1tk6nbgu"/>`,
		"fallback": "pixel:media",
	});
}

export default Component;
