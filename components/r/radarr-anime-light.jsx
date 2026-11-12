import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc3icy34w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc3icy34w"/>`,
		"fallback": "selfhst:radarr-anime-light",
	});
}

export default Component;
