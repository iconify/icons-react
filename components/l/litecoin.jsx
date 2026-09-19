import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4tanacyw.css';
import '../../css/o/oqjbmivuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4tanacyw"/><path class="oqjbmivuy"/></g>`,
		"fallback": "hugeicons:litecoin",
	});
}

export default Component;
