import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fuk51ib1x.css';
import '../../css/h/h76cb7bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fuk51ib1x"/><path class="h76cb7bbv"/></g>`,
		"fallback": "hugeicons:moon-cloud-angled-rain",
	});
}

export default Component;
