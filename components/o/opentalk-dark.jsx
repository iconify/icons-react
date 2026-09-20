import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahla53bhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahla53bhf"/>`,
		"fallback": "selfhst:opentalk-dark",
	});
}

export default Component;
