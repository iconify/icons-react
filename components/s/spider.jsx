import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqtrcchek.css';
import '../../css/u/u3ro9lbux.css';
import '../../css/f/fuo28_-1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lqtrcchek"/><path class="u3ro9lbux"/><path class="fuo28_-1e"/></g>`,
		"fallback": "andrsrxn:spider",
	});
}

export default Component;
