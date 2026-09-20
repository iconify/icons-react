import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ubl6q4byi.css';
import '../../css/k/kt8pef4mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ubl6q4byi"/><path class="kt8pef4mn"/></g>`,
		"fallback": "tabler:shopping-bag-edit",
	});
}

export default Component;
