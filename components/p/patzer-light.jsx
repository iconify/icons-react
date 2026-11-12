import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmoj0pv_m.css';
import '../../css/m/ml0m__bfx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmoj0pv_m"/><path class="ml0m__bfx"/>`,
		"fallback": "selfhst:patzer-light",
	});
}

export default Component;
