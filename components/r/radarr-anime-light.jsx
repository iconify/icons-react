import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sps-9q4ps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sps-9q4ps"/>`,
		"fallback": "selfhst:radarr-anime-light",
	});
}

export default Component;
