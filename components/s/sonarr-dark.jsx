import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk7q64b4r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk7q64b4r"/>`,
		"fallback": "selfhst:sonarr-dark",
	});
}

export default Component;
