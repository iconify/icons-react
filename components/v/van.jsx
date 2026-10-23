import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jgkilab4o.css';
import '../../css/m/m27uksbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jgkilab4o"/><path class="m27uksbfm"/></g>`,
		"fallback": "vadivam:van",
	});
}

export default Component;
