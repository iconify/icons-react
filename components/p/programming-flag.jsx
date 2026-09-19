import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vagvfxb6n.css';
import '../../css/e/esqolybmc.css';
import '../../css/n/nfuic9bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vagvfxb6n"/><path class="esqolybmc"/><path class="nfuic9bdb"/></g>`,
		"fallback": "hugeicons:programming-flag",
	});
}

export default Component;
