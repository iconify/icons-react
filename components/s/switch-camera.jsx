import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nihi_xxwd.css';
import '../../css/z/z6z3e6b6x.css';
import '../../css/j/jtc854xbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nihi_xxwd"/><path class="z6z3e6b6x"/><path class="jtc854xbu"/></g>`,
		"fallback": "vadivam:switch-camera",
	});
}

export default Component;
