import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eklehac_u.css';
import '../../css/d/df9l4c7sv.css';
import '../../css/i/i9irzwb5k.css';
import '../../css/n/nu3gfcbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eklehac_u"/><path class="df9l4c7sv"/><path class="i9irzwb5k"/><path clip-rule="evenodd" class="nu3gfcbun"/>`,
		"fallback": "solar:ufo-3-outline",
	});
}

export default Component;
