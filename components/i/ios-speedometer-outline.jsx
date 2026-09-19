import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bas7btrby.css';
import '../../css/x/x7m723b_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bas7btrby"/><path class="x7m723b_z"/>`,
		"fallback": "ion:ios-speedometer-outline",
	});
}

export default Component;
