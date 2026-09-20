import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx-f89bpi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx-f89bpi"/>`,
		"fallback": "selfhst:komodo-cd-dark",
	});
}

export default Component;
