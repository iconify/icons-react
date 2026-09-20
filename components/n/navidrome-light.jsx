import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtfe-5bky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtfe-5bky"/>`,
		"fallback": "selfhst:navidrome-light",
	});
}

export default Component;
