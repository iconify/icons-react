import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhsiw_b2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhsiw_b2x"/>`,
		"fallback": "selfhst:sidekiq-dark",
	});
}

export default Component;
