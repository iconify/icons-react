import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1io2pbgl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1io2pbgl"/>`,
		"fallback": "selfhst:kaneo-light",
	});
}

export default Component;
