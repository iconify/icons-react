import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvwlbwmkn.css';
import '../../css/z/zw52su8no.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvwlbwmkn"/><path class="zw52su8no"/>`,
		"fallback": "selfhst:lastpass",
	});
}

export default Component;
