import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x6n8wz5ke.css';
import '../../css/s/s-slj5b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x6n8wz5ke"/><path class="s-slj5b-w"/></g>`,
		"fallback": "bitcoin-icons:transfer-outline",
	});
}

export default Component;
