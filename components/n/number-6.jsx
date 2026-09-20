import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgy1eqqss.css';
import '../../css/l/lmvxib9oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xgy1eqqss"/><path class="lmvxib9oy"/></g>`,
		"fallback": "tabler:number-6",
	});
}

export default Component;
