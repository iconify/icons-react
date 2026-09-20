import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrm_zs23m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrm_zs23m"/>`,
		"fallback": "selfhst:travstats-dark",
	});
}

export default Component;
