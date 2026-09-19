import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgut2acps.css';
import '../../css/u/us_t0abnz.css';
import '../../css/q/q3zt_bcwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgut2acps"/><path class="us_t0abnz"/><path class="q3zt_bcwf"/>`,
		"fallback": "fxemoji:strawberry",
	});
}

export default Component;
