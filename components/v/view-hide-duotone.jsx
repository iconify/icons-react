import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u18xibb5p.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p-88isbpj.css';
import '../../css/q/q7_le6nbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGnvzg3hCy" class="u18xibb5p"/></defs><g class="ft5dv1b6b"><use href="#SVGnvzg3hCy" clip-rule="evenodd" class="d2kvgvbvc"/><path clip-rule="evenodd" class="p-88isbpj"/><use href="#SVGnvzg3hCy" clip-rule="evenodd" class="d2kvgvbvc"/><path class="q7_le6nbx"/></g>`,
		"fallback": "lets-icons:view-hide-duotone",
	});
}

export default Component;
