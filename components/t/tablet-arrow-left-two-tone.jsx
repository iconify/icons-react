import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3e43eb-h.css';
import '../../css/v/v8xfyt3_q.css';
import '../../css/h/h1a-_zb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s3e43eb-h"/><path class="v8xfyt3_q"/><path class="h1a-_zb3n"/></g>`,
		"fallback": "keyline-icons:tablet-arrow-left-two-tone",
	});
}

export default Component;
