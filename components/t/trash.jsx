import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqc3k61jp.css';
import '../../css/z/z4lv28bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqc3k61jp"/><path class="z4lv28bay"/>`,
		"fallback": "circum:trash",
	});
}

export default Component;
