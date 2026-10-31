import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z-uthhbdl.css';
import '../../css/y/yhdsbe0jv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z-uthhbdl"/><path class="yhdsbe0jv"/></g>`,
		"fallback": "coolicons:playlist-duocolor-round",
	});
}

export default Component;
