import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7rfoac5c.css';
import '../../css/e/ewux62qsa.css';
import '../../css/u/uakbxbc6s.css';
import '../../css/p/p8uqrfrux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o7rfoac5c"/><path class="ewux62qsa"/><path class="uakbxbc6s"/><path class="p8uqrfrux"/></g>`,
		"fallback": "streamline-cyber-color:pencil-clipboard",
	});
}

export default Component;
