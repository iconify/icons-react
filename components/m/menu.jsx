import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/bv_l28bpi.css';
import '../../css/p/pailr-q6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><rect class="bv_l28bpi"/><rect class="pailr-q6m"/></g>`,
		"fallback": "lets-icons:menu",
	});
}

export default Component;
