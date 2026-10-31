import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/suobsmife.css';
import '../../css/i/ihhy5kb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="suobsmife"/><path class="ihhy5kb9w"/></g>`,
		"fallback": "coolicons:volume-plus-duocolor-round",
	});
}

export default Component;
