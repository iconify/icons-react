import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djvfn5bwe.css';
import '../../css/i/ih2euw71h.css';
import '../../css/v/vvhqz38eo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djvfn5bwe"/><path class="ih2euw71h"/><path class="vvhqz38eo"/>`,
		"fallback": "selfhst:streamyfin-light",
	});
}

export default Component;
