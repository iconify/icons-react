import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uockbibpw.css';
import '../../css/l/lpkskg0rz.css';
import '../../css/k/ka-x0cbqx.css';
import '../../css/m/mce-y_bwt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uockbibpw"/><path class="lpkskg0rz"/><path class="ka-x0cbqx"/><path class="mce-y_bwt"/>`,
		"fallback": "ion:ios-trash-outline",
	});
}

export default Component;
