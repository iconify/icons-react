import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gip2fsogj.css';
import '../../css/h/hhrevwgtq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gip2fsogj"/><path class="hhrevwgtq"/>`,
		"fallback": "selfhst:tubetimeout-light",
	});
}

export default Component;
