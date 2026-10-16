import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs87d4bxt.css';
import '../../css/w/wexnw_bks.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs87d4bxt"/><path class="wexnw_bks"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:suction-bucket-20",
	});
}

export default Component;
