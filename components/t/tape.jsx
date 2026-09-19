import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr44fb1gq.css';
import '../../css/n/n9mo1oxei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr44fb1gq"/><path class="n9mo1oxei"/>`,
		"fallback": "boxicons:tape",
	});
}

export default Component;
