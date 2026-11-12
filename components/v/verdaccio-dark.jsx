import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi466ubef.css';
import '../../css/s/sf5m5dbrb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi466ubef"/><path class="sf5m5dbrb"/>`,
		"fallback": "selfhst:verdaccio-dark",
	});
}

export default Component;
