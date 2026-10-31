import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ihuibw2pp.css';
import '../../css/z/z9zgpdbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ihuibw2pp"/><path class="z9zgpdbwu"/></g>`,
		"fallback": "coolicons:traffic-light-duocolor-round",
	});
}

export default Component;
