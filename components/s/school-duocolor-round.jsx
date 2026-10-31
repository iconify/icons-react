import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ltbozbc2i.css';
import '../../css/p/p_96l4qaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ltbozbc2i"/><path class="p_96l4qaz"/></g>`,
		"fallback": "coolicons:school-duocolor-round",
	});
}

export default Component;
