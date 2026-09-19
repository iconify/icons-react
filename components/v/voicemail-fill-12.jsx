import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vn4okx2wl.css';
import '../../css/f/fge6z8bjk.css';
import '../../css/h/hytiksbxe.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="vn4okx2wl"/><circle class="fge6z8bjk"/><path class="hytiksbxe"/></g>`,
		"fallback": "garden:voicemail-fill-12",
	});
}

export default Component;
