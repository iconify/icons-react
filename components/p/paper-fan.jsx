import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e-11s9buz.css';
import '../../css/s/sejejabuk.css';
import '../../css/e/etat2sb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e-11s9buz wm-k"/><path class="sejejabuk wm-s"/><path class="etat2sb9j"/></g>`,
		"fallback": "withicons-bauhaus:paper-fan",
	});
}

export default Component;
