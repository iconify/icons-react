import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idmd52b7b.css';
import '../../css/g/gqb61cbma.css';
import '../../css/c/c_criydpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="idmd52b7b"/><path class="gqb61cbma"/><path class="c_criydpm"/></g>`,
		"fallback": "solar:signpost-line-duotone",
	});
}

export default Component;
