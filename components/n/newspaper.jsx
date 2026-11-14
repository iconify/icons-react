import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pu_7_8b3h.css';
import '../../css/m/mo8tiobxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pu_7_8b3h"/><path class="mo8tiobxa"/></g>`,
		"fallback": "hugeicons:newspaper",
	});
}

export default Component;
