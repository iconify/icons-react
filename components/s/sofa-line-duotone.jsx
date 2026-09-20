import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xxziz3sld.css';
import '../../css/l/l4pr92b0j.css';
import '../../css/q/qrpe6ib7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xxziz3sld"/><path class="l4pr92b0j"/><path class="qrpe6ib7u"/></g>`,
		"fallback": "solar:sofa-line-duotone",
	});
}

export default Component;
