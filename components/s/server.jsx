import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jyh615bzz.css';
import '../../css/n/n4acc3bci.css';
import '../../css/m/mx6yo8buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jyh615bzz"/><rect class="n4acc3bci"/><path class="mx6yo8buj"/></g>`,
		"fallback": "lets-icons:server",
	});
}

export default Component;
