import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/igk1-ht1l.css';
import '../../css/m/mlvan5p_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="igk1-ht1l"/><path class="mlvan5p_n"/></g>`,
		"fallback": "solar:sort-by-time-bold",
	});
}

export default Component;
