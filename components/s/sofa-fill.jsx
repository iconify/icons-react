import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/my2zm14yk.css';
import '../../css/p/p02mjlbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="my2zm14yk"/><path class="p02mjlbyt"/></g>`,
		"fallback": "keyline-icons:sofa-fill",
	});
}

export default Component;
