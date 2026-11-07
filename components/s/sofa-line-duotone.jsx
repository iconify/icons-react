import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xxziz3sld.css';
import '../../css/u/ujr860b1o.css';
import '../../css/t/tv5to9bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xxziz3sld"/><path class="ujr860b1o"/><path class="tv5to9bjv"/></g>`,
		"fallback": "solar:sofa-line-duotone",
	});
}

export default Component;
