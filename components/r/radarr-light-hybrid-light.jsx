import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-71aubjb.css';
import '../../css/f/f24w92bpp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-71aubjb"/><path class="f24w92bpp"/>`,
		"fallback": "selfhst:radarr-light-hybrid-light",
	});
}

export default Component;
