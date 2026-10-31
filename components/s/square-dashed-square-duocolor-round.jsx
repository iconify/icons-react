import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xzvom3b5z.css';
import '../../css/k/k47t5rb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xzvom3b5z"/><path class="k47t5rb9n"/></g>`,
		"fallback": "coolicons:square-dashed-square-duocolor-round",
	});
}

export default Component;
