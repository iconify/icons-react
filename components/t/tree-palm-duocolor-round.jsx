import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r8zggkb6v.css';
import '../../css/a/aphdxib6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r8zggkb6v"/><path class="aphdxib6s"/></g>`,
		"fallback": "coolicons:tree-palm-duocolor-round",
	});
}

export default Component;
