import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf_0tfbid.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf_0tfbid"/>`,
		"fallback": "selfhst:papermc-dark",
	});
}

export default Component;
