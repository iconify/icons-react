import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/om0ublbct.css';
import '../../css/p/pg2d1vf0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="om0ublbct"/><path class="pg2d1vf0f"/></g>`,
		"fallback": "mage:l-arrow-up-right",
	});
}

export default Component;
