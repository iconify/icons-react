import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfqh065wp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfqh065wp"/>`,
		"fallback": "selfhst:usulnet-light",
	});
}

export default Component;
