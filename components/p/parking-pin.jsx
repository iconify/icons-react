import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hp376n1jr.css';
import '../../css/t/tmmvafgig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hp376n1jr"/><path class="tmmvafgig"/></g>`,
		"fallback": "tabler:parking-pin",
	});
}

export default Component;
