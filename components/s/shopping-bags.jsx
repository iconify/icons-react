import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uexuiinxx.css';
import '../../css/v/vi7of3bpv.css';
import '../../css/g/guzqa6bjs.css';
import '../../css/g/g7lf7dbjc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uexuiinxx"/><path class="vi7of3bpv"/><path class="guzqa6bjs"/><path class="g7lf7dbjc"/>`,
		"fallback": "openmoji:shopping-bags",
	});
}

export default Component;
