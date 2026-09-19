import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ay-6ct32d.css';
import '../../css/s/susx8mqow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ay-6ct32d"/><path class="susx8mqow"/></g>`,
		"fallback": "ci:tag",
	});
}

export default Component;
