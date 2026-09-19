import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e_p547b1p.css';
import '../../css/v/vu5ev4b1m.css';
import '../../css/g/g8q560y6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e_p547b1p"/><path class="vu5ev4b1m"/><path class="g8q560y6z"/></g>`,
		"fallback": "hugeicons:shopping-bag-02",
	});
}

export default Component;
