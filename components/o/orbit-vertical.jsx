import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nli5obcdr.css';
import '../../css/f/fv5pcnpmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nli5obcdr"/><path class="fv5pcnpmp"/></g>`,
		"fallback": "tabler:orbit-vertical",
	});
}

export default Component;
