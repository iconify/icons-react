import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njq8_c_rt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njq8_c_rt"/>`,
		"fallback": "selfhst:notifiarr-dark",
	});
}

export default Component;
