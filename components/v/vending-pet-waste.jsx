import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4g_3efpq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4g_3efpq"/>`,
		"fallback": "temaki:vending-pet-waste",
	});
}

export default Component;
