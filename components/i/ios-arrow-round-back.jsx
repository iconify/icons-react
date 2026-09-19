import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o70vwv53g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o70vwv53g"/>`,
		"fallback": "ion:ios-arrow-round-back",
	});
}

export default Component;
