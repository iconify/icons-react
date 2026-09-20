import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tga4nsf7j.css';
import '../../css/b/bsjwi-_4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tga4nsf7j"/><path class="bsjwi-_4k"/></g>`,
		"fallback": "lucide:undo-2",
	});
}

export default Component;
