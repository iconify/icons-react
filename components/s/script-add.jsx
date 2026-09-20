import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo3mp59mb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo3mp59mb"/>`,
		"fallback": "ix:script-add",
	});
}

export default Component;
