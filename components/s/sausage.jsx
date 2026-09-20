import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nvwggr8eu.css';
import '../../css/n/n7r_lwbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nvwggr8eu"/><path class="n7r_lwbvc"/></g>`,
		"fallback": "lucide-lab:sausage",
	});
}

export default Component;
