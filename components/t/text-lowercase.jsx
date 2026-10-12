import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n6k_2xfru.css';
import '../../css/s/suvia6bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n6k_2xfru"/><path class="suvia6bbw"/></g>`,
		"fallback": "andrsrxn:text-lowercase",
	});
}

export default Component;
