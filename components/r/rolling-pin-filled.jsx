import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe58r_k9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe58r_k9y"/>`,
		"fallback": "reicon:rolling-pin-filled",
	});
}

export default Component;
