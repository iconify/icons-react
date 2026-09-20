import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0v-_zcks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0v-_zcks"/>`,
		"fallback": "selfhst:rudder-dark",
	});
}

export default Component;
