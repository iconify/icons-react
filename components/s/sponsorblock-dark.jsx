import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_gi64bop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_gi64bop"/>`,
		"fallback": "selfhst:sponsorblock-dark",
	});
}

export default Component;
