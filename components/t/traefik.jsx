import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdm1m0bzc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdm1m0bzc"/>`,
		"fallback": "selfhst:traefik",
	});
}

export default Component;
