import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v326h-n7o.css';
import '../../css/r/rc04i3pkz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v326h-n7o"/><path class="rc04i3pkz"/>`,
		"fallback": "selfhst:planarally",
	});
}

export default Component;
