import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m6nis6tqv.css';
import '../../css/c/cqujenbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m6nis6tqv"/><path class="cqujenbig"/></g>`,
		"fallback": "hugeicons:time-setting-02",
	});
}

export default Component;
