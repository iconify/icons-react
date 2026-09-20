import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ncw9xon8l.css';
import '../../css/z/zv43mobfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ncw9xon8l"/><path class="zv43mobfd"/></g>`,
		"fallback": "tabler:restore",
	});
}

export default Component;
