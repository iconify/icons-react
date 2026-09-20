import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9u7-kb4c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9u7-kb4c"/>`,
		"fallback": "selfhst:pent-no-dark",
	});
}

export default Component;
