import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw_ciwb1f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw_ciwb1f"/>`,
		"fallback": "garden:phone-call-transfer-stroke-16",
	});
}

export default Component;
