import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh5dkdbpg.css';
import '../../css/p/p1b5fubnd.css';
import '../../css/m/mu_ktials.css';
import '../../css/v/vvmcp5lth.css';
import '../../css/n/nzm11-kxt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh5dkdbpg"/><path class="p1b5fubnd"/><path class="mu_ktials"/><path class="vvmcp5lth"/><path class="nzm11-kxt"/>`,
		"fallback": "selfhst:microsoft-access-dark",
	});
}

export default Component;
