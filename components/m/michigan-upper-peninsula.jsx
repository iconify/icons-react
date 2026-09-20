import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc9q056bm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc9q056bm"/>`,
		"fallback": "pinhead:michigan-upper-peninsula",
	});
}

export default Component;
