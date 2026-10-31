import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1olr5bvf.css';
import '../../css/j/ji1ygob8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a1olr5bvf"/><path class="ji1ygob8y"/></g>`,
		"fallback": "coolicons:share-duotone-round",
	});
}

export default Component;
