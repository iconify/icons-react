import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5t102bbt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5t102bbt"/>`,
		"fallback": "selfhst:pent-no-light",
	});
}

export default Component;
