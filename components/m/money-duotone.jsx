import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a21mw4alh.css';
import '../../css/k/kor5vl3yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a21mw4alh"/><path class="kor5vl3yu"/></g>`,
		"fallback": "si:money-duotone",
	});
}

export default Component;
