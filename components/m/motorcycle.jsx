import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw11f-2rp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw11f-2rp"/>`,
		"fallback": "pinhead:motorcycle",
	});
}

export default Component;
