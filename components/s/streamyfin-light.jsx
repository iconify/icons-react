import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9rsmffna.css';
import '../../css/m/m3cywodxx.css';
import '../../css/v/vvhqz38eo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9rsmffna"/><path class="m3cywodxx"/><path class="vvhqz38eo"/>`,
		"fallback": "selfhst:streamyfin-light",
	});
}

export default Component;
