import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itr6d0bop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itr6d0bop"/>`,
		"fallback": "selfhst:okd-dark",
	});
}

export default Component;
