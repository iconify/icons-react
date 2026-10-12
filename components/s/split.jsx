import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cys6l9bkk.css';
import '../../css/s/sbfdibq2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cys6l9bkk"/><path class="sbfdibq2x"/></g>`,
		"fallback": "andrsrxn:split",
	});
}

export default Component;
