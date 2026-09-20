import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mc_u4bvwv.css';
import '../../css/o/oxy_0ibih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mc_u4bvwv"/><path class="oxy_0ibih"/></g>`,
		"fallback": "tabler:plunger",
	});
}

export default Component;
