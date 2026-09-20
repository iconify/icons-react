import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwcdh92ry.css';
import '../../css/h/hhenyhbok.css';
import '../../css/x/xr26tqb7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwcdh92ry"/><path class="hhenyhbok"/><path class="xr26tqb7s"/>`,
		"fallback": "selfhst:kherad-dark",
	});
}

export default Component;
