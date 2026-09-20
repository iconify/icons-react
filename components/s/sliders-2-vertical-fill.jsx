import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j64wejbxo.css';
import '../../css/i/ire3scbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j64wejbxo"/><path class="ire3scbsc"/></g>`,
		"fallback": "keyline-icons:sliders-2-vertical-fill",
	});
}

export default Component;
