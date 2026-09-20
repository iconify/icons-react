import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l55hs8bvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l55hs8bvv"/>`,
		"fallback": "selfhst:microsoft-excel-2000-dark",
	});
}

export default Component;
