import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/outfamjxg.css';
import '../../css/s/s67or1jiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="outfamjxg"/><path class="s67or1jiy"/></g>`,
		"fallback": "tabler:pin-invoke",
	});
}

export default Component;
