import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-znlvbho.css';
import '../../css/r/rfii-0k4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a-znlvbho"/><circle class="rfii-0k4v"/></g>`,
		"fallback": "lucide:venus",
	});
}

export default Component;
