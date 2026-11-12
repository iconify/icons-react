import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a22otgusg.css';
import '../../css/g/ghhjxtbsy.css';
import '../../css/v/vc7mhgvcb.css';
import '../../css/m/mkp_-2o3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a22otgusg"/><path class="ghhjxtbsy"/><path class="vc7mhgvcb"/><path class="mkp_-2o3y"/>`,
		"fallback": "selfhst:ksuite-kpaste",
	});
}

export default Component;
