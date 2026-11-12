import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6s54bcir.css';
import '../../css/m/m6_4qv90d.css';
import '../../css/y/ydohd-r6b.css';
import '../../css/u/ugods-bug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6s54bcir"/><circle class="m6_4qv90d"/><path class="ydohd-r6b"/><path class="ugods-bug"/>`,
		"fallback": "selfhst:nodyx-light",
	});
}

export default Component;
