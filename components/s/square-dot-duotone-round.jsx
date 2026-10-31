import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4bgjdnro.css';
import '../../css/z/zi01o6hii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n4bgjdnro"/><path class="zi01o6hii"/></g>`,
		"fallback": "coolicons:square-dot-duotone-round",
	});
}

export default Component;
