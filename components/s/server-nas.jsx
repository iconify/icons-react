import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i-7j6wt_r.css';
import '../../css/i/i_kpawtqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i-7j6wt_r"/><rect class="i_kpawtqq"/></g>`,
		"fallback": "lucide:server-nas",
	});
}

export default Component;
