import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rth9q8bav.css';
import '../../css/e/enio3mbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rth9q8bav"/><path class="enio3mbry"/></g>`,
		"fallback": "tabler:remote-control",
	});
}

export default Component;
