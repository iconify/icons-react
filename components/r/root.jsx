import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqvq7_clu.css';
import '../../css/u/uyikr8bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uqvq7_clu"/><path class="uyikr8bep"/></g>`,
		"fallback": "andrsrxn:root",
	});
}

export default Component;
