import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsh4tibvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsh4tibvv"/>`,
		"fallback": "famicons:skull-sharp",
	});
}

export default Component;
