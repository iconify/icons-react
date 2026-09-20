import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8ii04yqm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8ii04yqm"/>`,
		"fallback": "selfhst:openhands-light",
	});
}

export default Component;
