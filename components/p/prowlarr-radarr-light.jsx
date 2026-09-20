import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-71aubjb.css';
import '../../css/b/bsm7zc0tv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-71aubjb"/><path class="bsm7zc0tv"/>`,
		"fallback": "selfhst:prowlarr-radarr-light",
	});
}

export default Component;
