import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/j/jh48l9bgk.css';
import '../../css/e/eag7f3rmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j7qjn6psg"/><path class="jh48l9bgk"/><path class="eag7f3rmh"/></g>`,
		"fallback": "tabler:rating-16-plus",
	});
}

export default Component;
