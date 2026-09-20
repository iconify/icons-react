import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vl-rw1u6e.css';
import '../../css/r/r_lgxbc9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vl-rw1u6e"/><path class="r_lgxbc9f"/></g>`,
		"fallback": "lets-icons:pil",
	});
}

export default Component;
