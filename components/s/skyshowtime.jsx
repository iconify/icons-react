import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzm_x0bhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzm_x0bhr"/>`,
		"fallback": "selfhst:skyshowtime",
	});
}

export default Component;
