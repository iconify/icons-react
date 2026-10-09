import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygoozhsqh.css';
import '../../css/j/jjv4m6b-s.css';
import '../../css/f/fylhtkbms.css';
import '../../css/g/gpgqfdbap.css';
import '../../css/a/a79tt-b_j.css';
import '../../css/e/ep9tu-o-e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygoozhsqh"/><path class="jjv4m6b-s"/><path class="fylhtkbms"/><path class="gpgqfdbap"/><path class="a79tt-b_j"/><path class="ep9tu-o-e"/>`,
		"fallback": "energy-icons:pagoda-20-bold",
	});
}

export default Component;
