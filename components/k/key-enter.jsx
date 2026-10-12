import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywff18kar.css';
import '../../css/f/frs8jabkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ywff18kar"/><path class="frs8jabkg"/></g>`,
		"fallback": "andrsrxn:key-enter",
	});
}

export default Component;
