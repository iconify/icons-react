import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d0appmb6v.css';
import '../../css/g/ghqb3jbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d0appmb6v"/><path class="ghqb3jbhi"/></g>`,
		"fallback": "keyline-icons:menu-sparkles-fill",
	});
}

export default Component;
