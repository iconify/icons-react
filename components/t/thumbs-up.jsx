import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pd04wkbuc.css';
import '../../css/i/ib3p69b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="pd04wkbuc"/><path class="ib3p69b2j"/></g>`,
		"fallback": "proicons:thumbs-up",
	});
}

export default Component;
