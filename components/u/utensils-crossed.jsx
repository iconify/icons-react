import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qsi2q6bmn.css';
import '../../css/x/xmpu4fb3w.css';
import '../../css/p/pjawsvbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qsi2q6bmn wm-shadow"/><path class="wm-shadow xmpu4fb3w"/><path class="pjawsvbom"/></g>`,
		"fallback": "withicons-brutal:utensils-crossed",
	});
}

export default Component;
