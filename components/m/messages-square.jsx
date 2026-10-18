import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t32mgbbdh.css';
import '../../css/q/qyszdbcfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t32mgbbdh"/><path class="qyszdbcfq"/></g>`,
		"fallback": "vadivam:messages-square",
	});
}

export default Component;
