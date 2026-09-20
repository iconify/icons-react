import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ui59x3aub.css';
import '../../css/z/zhex01bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ui59x3aub"/><path class="zhex01bqt"/></g>`,
		"fallback": "keyline-icons:venus-two-tone",
	});
}

export default Component;
