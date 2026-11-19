import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0bk-h96g.css';
import '../../css/z/zq2om_ydn.css';
import '../../css/f/f7lcatbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o0bk-h96g"/><path class="zq2om_ydn"/><path class="f7lcatbgl"/></g>`,
		"fallback": "andrsrxn:paycheck-move",
	});
}

export default Component;
