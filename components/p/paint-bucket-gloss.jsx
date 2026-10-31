import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h7jwhcc9r.css';
import '../../css/a/ao_1nx5dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h7jwhcc9r wm-k"/><path class="ao_1nx5dx wm-s"/></g>`,
		"fallback": "withicons:paint-bucket-gloss",
	});
}

export default Component;
