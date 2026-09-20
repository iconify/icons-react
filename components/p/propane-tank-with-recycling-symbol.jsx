import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifsc1nbxs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifsc1nbxs"/>`,
		"fallback": "pinhead:propane-tank-with-recycling-symbol",
	});
}

export default Component;
