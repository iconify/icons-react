import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnfr2fw6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnfr2fw6o"/>`,
		"fallback": "selfhst:newsblur-light",
	});
}

export default Component;
