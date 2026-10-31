import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk1-n-esz.css';
import '../../css/k/kj7y5ub8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yk1-n-esz"/><path class="kj7y5ub8v"/></g>`,
		"fallback": "coolicons:notion-duotone-round",
	});
}

export default Component;
