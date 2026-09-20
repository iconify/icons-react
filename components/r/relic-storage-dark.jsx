import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk_s0qb8u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk_s0qb8u"/>`,
		"fallback": "selfhst:relic-storage-dark",
	});
}

export default Component;
