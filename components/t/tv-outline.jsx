import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1dt1gbdl.css';
import '../../css/r/r6mz58bje.css';
import '../../css/z/z08a_ruyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t1dt1gbdl"/><path class="r6mz58bje"/><path class="z08a_ruyx"/>`,
		"fallback": "solar:tv-outline",
	});
}

export default Component;
