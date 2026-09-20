import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct297rbxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct297rbxi"/>`,
		"fallback": "selfhst:turnkey-linux",
	});
}

export default Component;
