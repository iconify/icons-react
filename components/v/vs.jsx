import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qznxftb5v.css';
import '../../css/u/uojryrbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qznxftb5v"/><path class="uojryrbcg"/></g>`,
		"fallback": "tabler:vs",
	});
}

export default Component;
