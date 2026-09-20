import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv13l7o3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv13l7o3m"/>`,
		"fallback": "selfhst:shelly-light",
	});
}

export default Component;
