import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x_ki6yn-k.css';
import '../../css/q/qshp9acbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x_ki6yn-k"/><circle class="qshp9acbp"/></g>`,
		"fallback": "lucide:venus-and-mars",
	});
}

export default Component;
