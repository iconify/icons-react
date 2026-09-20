import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lu6qd2btp.css';
import '../../css/r/ru0y7wznx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lu6qd2btp"/><path class="ru0y7wznx"/></g>`,
		"fallback": "lucide:toothbrush",
	});
}

export default Component;
