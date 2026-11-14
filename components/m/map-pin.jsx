import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v0ioy2bmf.css';
import '../../css/f/f1_cqti_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v0ioy2bmf"/><circle class="f1_cqti_y"/></g>`,
		"fallback": "struq:map-pin",
	});
}

export default Component;
