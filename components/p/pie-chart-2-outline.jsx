import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u02s36b_n.css';
import '../../css/n/n_akk2bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u02s36b_n"/><path class="n_akk2bhw"/></g>`,
		"fallback": "solar:pie-chart-2-outline",
	});
}

export default Component;
