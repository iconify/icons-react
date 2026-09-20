import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-zizxe7n.css';
import '../../css/e/eoxem8vcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k-zizxe7n"/><path class="eoxem8vcg"/></g>`,
		"fallback": "vadivam:shield-check",
	});
}

export default Component;
