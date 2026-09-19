import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/onk5l4bbl.css';
import '../../css/l/lifqewb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="onk5l4bbl"/><path class="lifqewb3i"/></g>`,
		"fallback": "hugeicons:shopping-basket-01",
	});
}

export default Component;
