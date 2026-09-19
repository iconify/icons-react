import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q86g-lw1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q86g-lw1w"/>`,
		"fallback": "cil:media-record",
	});
}

export default Component;
