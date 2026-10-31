import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w-l0ynbmg.css';
import '../../css/x/xaguw3biq.css';
import '../../css/w/w0plfmzgn.css';
import '../../css/n/n4vmky5vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="w-l0ynbmg wm-shadow"/><path class="wm-shadow xaguw3biq"/><path class="w0plfmzgn"/><path class="n4vmky5vt"/></g>`,
		"fallback": "withicons-brutal:landmark",
	});
}

export default Component;
