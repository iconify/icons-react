import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eibzgdcne.css';
import '../../css/m/mhb2ho-ln.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eibzgdcne"/><path class="mhb2ho-ln"/>`,
		"fallback": "fxemoji:right",
	});
}

export default Component;
