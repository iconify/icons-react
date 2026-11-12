import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrcqh2b6o.css';
import '../../css/x/xw_9y5bzo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrcqh2b6o"/><path class="xw_9y5bzo"/>`,
		"fallback": "selfhst:pomerium-light",
	});
}

export default Component;
