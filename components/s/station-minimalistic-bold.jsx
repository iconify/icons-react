import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7ll2egzf.css';
import '../../css/v/v2ruv0bjc.css';
import '../../css/m/mbh0r8bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7ll2egzf"/><path class="v2ruv0bjc"/><path clip-rule="evenodd" class="mbh0r8bba"/>`,
		"fallback": "solar:station-minimalistic-bold",
	});
}

export default Component;
