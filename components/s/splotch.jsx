import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi4exwl-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi4exwl-e"/>`,
		"fallback": "fa-solid:splotch",
	});
}

export default Component;
