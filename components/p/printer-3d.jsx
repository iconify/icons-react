import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fxmqmgk0h.css';
import '../../css/e/ew83xsbwt.css';
import '../../css/k/konl6acji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fxmqmgk0h"/><path class="ew83xsbwt"/><path class="konl6acji"/></g>`,
		"fallback": "lucide:printer-3d",
	});
}

export default Component;
