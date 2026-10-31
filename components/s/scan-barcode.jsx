import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ults33brt.css';
import '../../css/q/qsbi9kdry.css';
import '../../css/w/wgli4bboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ults33brt wm-shadow"/><path class="qsbi9kdry wm-shadow"/><path class="wgli4bboz"/></g>`,
		"fallback": "withicons-brutal:scan-barcode",
	});
}

export default Component;
