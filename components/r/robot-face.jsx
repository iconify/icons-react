import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vnjbsdbbz.css';
import '../../css/v/v0sja2b4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vnjbsdbbz"/><path class="v0sja2b4v"/></g>`,
		"fallback": "tabler:robot-face",
	});
}

export default Component;
