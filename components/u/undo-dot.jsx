import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lu90ikqew.css';
import '../../css/e/ed1u2wbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lu90ikqew"/><path class="ed1u2wbdk"/></g>`,
		"fallback": "vadivam:undo-dot",
	});
}

export default Component;
