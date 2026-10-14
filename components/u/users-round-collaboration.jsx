import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v57c18mrt.css';
import '../../css/d/dto95jbvb.css';
import '../../css/v/vs6v5wbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v57c18mrt"/><circle class="dto95jbvb"/><circle class="vs6v5wbbc"/></g>`,
		"fallback": "lucide:users-round-collaboration",
	});
}

export default Component;
