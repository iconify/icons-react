import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvy27v4ee.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvy27v4ee"/>`,
		"fallback": "selfhst:telltaledns-dark",
	});
}

export default Component;
