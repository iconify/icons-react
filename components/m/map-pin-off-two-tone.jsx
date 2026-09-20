import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t41omzb7x.css';
import '../../css/x/xazo8yt0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t41omzb7x"/><path class="xazo8yt0n"/></g>`,
		"fallback": "keyline-icons:map-pin-off-two-tone",
	});
}

export default Component;
