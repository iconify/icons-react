import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yukgxrbru.css';
import '../../css/k/km47d4n-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yukgxrbru"/><path class="km47d4n-a"/></g>`,
		"fallback": "coolicons:shopping-bag-alt-duotone-round",
	});
}

export default Component;
