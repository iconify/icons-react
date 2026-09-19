import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/c/crd953qrq.css';
import '../../css/v/v3c3ciota.css';
import '../../css/a/an4w8gbhl.css';
import '../../css/t/t9jwpibcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="crd953qrq"/><path class="v3c3ciota"/><circle class="an4w8gbhl"/><path class="t9jwpibcu"/></g>`,
		"fallback": "akar-icons:newspaper",
	});
}

export default Component;
