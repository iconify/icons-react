import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m76_9tmlz.css';
import '../../css/f/fi7kcnkgv.css';
import '../../css/b/b7o2pc7la.css';
import '../../css/f/f5nmdybij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m76_9tmlz"/><path class="fi7kcnkgv"/><path class="b7o2pc7la"/><path class="f5nmdybij"/>`,
		"fallback": "solar:pin-list-outline",
	});
}

export default Component;
