import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l04k3h--y.css';
import '../../css/v/v1qrver_f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l04k3h--y"/><path class="v1qrver_f"/>`,
		"fallback": "oui:token-module",
	});
}

export default Component;
