import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzlnpvced.css';
import '../../css/v/vmfgchi1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzlnpvced"/><path class="vmfgchi1i"/>`,
		"fallback": "streamline-ultimate:smart-watch-square-location-bold",
	});
}

export default Component;
