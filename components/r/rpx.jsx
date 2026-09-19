import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhvd7ueyi.css';
import '../../css/x/x96vd27ep.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="uhvd7ueyi"/><path class="x96vd27ep"/></g>`,
		"fallback": "cryptocurrency-color:rpx",
	});
}

export default Component;
