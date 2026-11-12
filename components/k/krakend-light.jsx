import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_-c_yr1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_-c_yr1d"/>`,
		"fallback": "selfhst:krakend-light",
	});
}

export default Component;
