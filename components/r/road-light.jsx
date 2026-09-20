import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/q/qx43_-bas.css';
import '../../css/c/cycjzt7vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="qx43_-bas"/><path class="cycjzt7vc"/></g>`,
		"fallback": "lets-icons:road-light",
	});
}

export default Component;
