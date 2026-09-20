import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3e43eb-h.css';
import '../../css/m/mxzd8cb5x.css';
import '../../css/h/h1a-_zb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s3e43eb-h"/><path class="mxzd8cb5x"/><path class="h1a-_zb3n"/></g>`,
		"fallback": "keyline-icons:tablet-check-duotone",
	});
}

export default Component;
