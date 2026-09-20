import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slc1jnbcy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slc1jnbcy"/>`,
		"fallback": "selfhst:lyft-light",
	});
}

export default Component;
