import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/asfoicckl.css';
import '../../css/d/dggko6bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="asfoicckl"/><path class="dggko6bwh"/></g>`,
		"fallback": "keyline-icons:toolbox-fill",
	});
}

export default Component;
