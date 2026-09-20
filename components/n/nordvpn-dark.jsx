import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csz2z-byx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csz2z-byx"/>`,
		"fallback": "selfhst:nordvpn-dark",
	});
}

export default Component;
