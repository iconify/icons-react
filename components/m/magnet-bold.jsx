import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crd2je-4i.css';
import '../../css/f/fxwwtlavh.css';
import '../../css/q/qkrmpnbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crd2je-4i"/><path class="fxwwtlavh"/><path class="qkrmpnbsi"/>`,
		"fallback": "solar:magnet-bold",
	});
}

export default Component;
