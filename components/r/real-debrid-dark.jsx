import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sspndwbmb.css';
import '../../css/v/v3bumgb4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sspndwbmb"/><path class="v3bumgb4y"/>`,
		"fallback": "selfhst:real-debrid-dark",
	});
}

export default Component;
