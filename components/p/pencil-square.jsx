import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sp46y9wqw.css';
import '../../css/k/k7fjn8bbq.css';
import '../../css/j/jx-7c2bxz.css';
import '../../css/d/drdrgzboo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sp46y9wqw"/><path class="k7fjn8bbq"/><path class="jx-7c2bxz"/><path class="drdrgzboo"/></g>`,
		"fallback": "streamline-flex-color:pencil-square",
	});
}

export default Component;
