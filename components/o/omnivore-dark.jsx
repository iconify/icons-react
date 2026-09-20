import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjxm_wlfu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjxm_wlfu"/>`,
		"fallback": "selfhst:omnivore-dark",
	});
}

export default Component;
