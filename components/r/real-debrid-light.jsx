import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_0hbyvso.css';
import '../../css/s/ssv2g6b4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_0hbyvso"/><path class="ssv2g6b4g"/>`,
		"fallback": "selfhst:real-debrid-light",
	});
}

export default Component;
