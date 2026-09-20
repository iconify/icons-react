import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhghu-bwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhghu-bwf"/>`,
		"fallback": "selfhst:lidarr-dark",
	});
}

export default Component;
