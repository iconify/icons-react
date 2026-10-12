import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n0ky-ob5i.css';
import '../../css/n/nd-7h3bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n0ky-ob5i"/><path class="nd-7h3bbm"/></g>`,
		"fallback": "andrsrxn:square-root",
	});
}

export default Component;
