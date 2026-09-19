import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qctaksagg.css';
import '../../css/w/wzczkxivh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="qctaksagg"/><path class="wzczkxivh"/>`,
		"fallback": "boxicons:screen-light-filled",
	});
}

export default Component;
