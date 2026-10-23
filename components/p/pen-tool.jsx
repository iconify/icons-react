import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ectpqzbth.css';
import '../../css/q/q0od84bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ectpqzbth"/><path class="q0od84bep"/></g>`,
		"fallback": "vadivam:pen-tool",
	});
}

export default Component;
