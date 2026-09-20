import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwgmc0e6k.css';
import '../../css/i/ipamtibyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwgmc0e6k"/><path class="ipamtibyu"/>`,
		"fallback": "selfhst:invoke-ai",
	});
}

export default Component;
