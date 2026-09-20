import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eu9kkgbdm.css';
import '../../css/m/m5wsf8blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eu9kkgbdm"/><circle class="m5wsf8blc"/></g>`,
		"fallback": "lucide:line-dot-left-horizontal",
	});
}

export default Component;
