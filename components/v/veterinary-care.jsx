import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhcm9w7gk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhcm9w7gk"/>`,
		"fallback": "temaki:veterinary-care",
	});
}

export default Component;
