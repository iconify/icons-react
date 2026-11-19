import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eotm-v5hq.css';
import '../../css/k/kfbtf9byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eotm-v5hq"/><path class="kfbtf9byb"/></g>`,
		"fallback": "andrsrxn:text-whole-word",
	});
}

export default Component;
