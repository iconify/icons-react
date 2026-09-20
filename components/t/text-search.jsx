import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pcflsrbga.css';
import '../../css/d/dto95jbvb.css';
import '../../css/v/vsle8o47l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pcflsrbga"/><circle class="dto95jbvb"/><path class="vsle8o47l"/></g>`,
		"fallback": "lucide:text-search",
	});
}

export default Component;
