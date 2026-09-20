import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsneps5ax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsneps5ax"/>`,
		"fallback": "ix:skip-back-filled",
	});
}

export default Component;
