import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgvl_034t.css';
import '../../css/s/s-n0h6e4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgvl_034t"/><path class="s-n0h6e4e"/>`,
		"fallback": "selfhst:proton-calendar-light",
	});
}

export default Component;
