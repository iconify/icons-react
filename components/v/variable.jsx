import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ytbydc89d.css';
import '../../css/p/p0in47oqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ytbydc89d"/><path class="p0in47oqi"/></g>`,
		"fallback": "tabler:variable",
	});
}

export default Component;
