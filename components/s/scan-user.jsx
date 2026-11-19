import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmjx6bcyi.css';
import '../../css/a/a3rks6bvg.css';
import '../../css/i/islcllbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hmjx6bcyi"/><path class="a3rks6bvg"/><path clip-rule="evenodd" class="islcllbzr"/></g>`,
		"fallback": "andrsrxn:scan-user",
	});
}

export default Component;
