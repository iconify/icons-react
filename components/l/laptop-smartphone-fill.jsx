import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ijh4fpfgt.css';
import '../../css/n/n5gl7ccqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="ijh4fpfgt"/><path class="n5gl7ccqk"/></g>`,
		"fallback": "keyline-icons:laptop-smartphone-fill",
	});
}

export default Component;
