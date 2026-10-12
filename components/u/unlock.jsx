import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwbs8kbqi.css';
import '../../css/o/ojjd48bzf.css';
import '../../css/j/ju8za1byn.css';
import '../../css/j/jcnvp7bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="fwbs8kbqi"/><rect class="ojjd48bzf"/><path class="ju8za1byn"/><path class="jcnvp7bem"/></g>`,
		"fallback": "andrsrxn:unlock",
	});
}

export default Component;
