import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kjr9bcd_h.css';
import '../../css/n/n_6ff7kly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kjr9bcd_h"/><path class="n_6ff7kly"/></g>`,
		"fallback": "lucide:redo-2",
	});
}

export default Component;
