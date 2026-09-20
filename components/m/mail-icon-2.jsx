import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k36puzb3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k36puzb3y"/>`,
		"fallback": "subway:mail-icon-2",
	});
}

export default Component;
