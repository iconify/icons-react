import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tgd_x0plo.css';
import '../../css/r/reey565qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tgd_x0plo"/><path class="reey565qp"/></g>`,
		"fallback": "vadivam:undo-dot",
	});
}

export default Component;
