import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eqk_cmbqi.css';
import '../../css/m/mdh3hzb-o.css';
import '../../css/l/ll0qxj7eq.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="eqk_cmbqi"/><path class="mdh3hzb-o"/><circle class="ll0qxj7eq"/></g>`,
		"fallback": "system-uicons:warning-circle",
	});
}

export default Component;
