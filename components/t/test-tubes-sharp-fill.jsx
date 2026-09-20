import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/flgrwlbus.css';
import '../../css/a/ah4s37bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="flgrwlbus"/><path class="ah4s37bgk"/></g>`,
		"fallback": "keyline-icons:test-tubes-sharp-fill",
	});
}

export default Component;
