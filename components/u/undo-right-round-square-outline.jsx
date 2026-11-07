import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd143q7_a.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd143q7_a"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`,
		"fallback": "solar:undo-right-round-square-outline",
	});
}

export default Component;
