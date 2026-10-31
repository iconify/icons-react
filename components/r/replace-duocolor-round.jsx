import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ra005kbwp.css';
import '../../css/l/lcgslum8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ra005kbwp"/><path class="lcgslum8e"/></g>`,
		"fallback": "coolicons:replace-duocolor-round",
	});
}

export default Component;
