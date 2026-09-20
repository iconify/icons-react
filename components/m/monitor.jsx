import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9fh0rbfq.css';
import '../../css/m/mbegp2bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y9fh0rbfq"/><path class="mbegp2bbn"/></g>`,
		"fallback": "majesticons:monitor",
	});
}

export default Component;
