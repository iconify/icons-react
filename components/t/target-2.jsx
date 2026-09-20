import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5akcacqo.css';
import '../../css/f/fm7lf324t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y5akcacqo"/><path class="fm7lf324t"/></g>`,
		"fallback": "tabler:target-2",
	});
}

export default Component;
