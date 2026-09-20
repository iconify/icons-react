import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kk6vprbmx.css';
import '../../css/x/x6t_ipb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="kk6vprbmx"/><path class="x6t_ipb0q"/></g>`,
		"fallback": "lucide-lab:refrigerator-freezer",
	});
}

export default Component;
