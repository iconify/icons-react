import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxvrb1ymn.css';
import '../../css/v/vy85ju8br.css';
import '../../css/e/ejsl5db7o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxvrb1ymn"/><path class="vy85ju8br"/><path class="ejsl5db7o"/>`,
		"fallback": "energy-icons:time-of-use-20",
	});
}

export default Component;
