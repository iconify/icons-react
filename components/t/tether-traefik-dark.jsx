import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afvuxlb2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afvuxlb2w"/>`,
		"fallback": "selfhst:tether-traefik-dark",
	});
}

export default Component;
