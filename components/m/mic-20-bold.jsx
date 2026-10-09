import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uih-zwlau.css';
import '../../css/p/pc3rltyei.css';
import '../../css/r/rltagccoa.css';
import '../../css/a/an84ox-sq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uih-zwlau"/><path class="pc3rltyei"/><path class="rltagccoa"/><path class="an84ox-sq"/>`,
		"fallback": "energy-icons:mic-20-bold",
	});
}

export default Component;
