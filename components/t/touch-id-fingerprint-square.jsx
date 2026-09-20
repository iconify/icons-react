import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvg-fypjl.css';
import '../../css/i/i72_7ab1r.css';
import '../../css/f/feqtfmb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvg-fypjl"/><path class="i72_7ab1r"/><path class="feqtfmb5d"/>`,
		"fallback": "streamline-freehand:touch-id-fingerprint-square",
	});
}

export default Component;
