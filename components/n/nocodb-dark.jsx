import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw1v71bwi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw1v71bwi"/>`,
		"fallback": "selfhst:nocodb-dark",
	});
}

export default Component;
