import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsv7l1bgu.css';
import '../../css/m/mz8nype4i.css';
import '../../css/h/hn4u64b6h.css';
import '../../css/i/id30xhbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(1 0 0 -1 1.77 20.15)" class="tsv7l1bgu"/><path class="mz8nype4i"/><rect transform="matrix(1 0 0 -1 1.77 20.15)" class="hn4u64b6h"/><path class="id30xhbct"/></g>`,
		"fallback": "andrsrxn:measure",
	});
}

export default Component;
