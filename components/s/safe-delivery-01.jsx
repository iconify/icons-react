import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/feusg2b6l.css';
import '../../css/s/se7-jc0kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="feusg2b6l"/><path class="se7-jc0kz"/></g>`,
		"fallback": "hugeicons:safe-delivery-01",
	});
}

export default Component;
