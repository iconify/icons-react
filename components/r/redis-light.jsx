import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynl1j0b_y.css';
import '../../css/s/s8or9-btt.css';
import '../../css/l/ln9fce54w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynl1j0b_y"/><path class="s8or9-btt"/><path class="ln9fce54w"/>`,
		"fallback": "selfhst:redis-light",
	});
}

export default Component;
