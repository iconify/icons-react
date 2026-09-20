import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sirdmcywf.css';
import '../../css/i/iq99c4b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sirdmcywf"/><path class="iq99c4b9v"/></g>`,
		"fallback": "tdesign:pyramid-maya",
	});
}

export default Component;
