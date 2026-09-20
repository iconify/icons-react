import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fy_59cb6y.css';
import '../../css/f/fttoz5bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fy_59cb6y"/><path class="fttoz5bbe"/></g>`,
		"fallback": "tabler:music",
	});
}

export default Component;
