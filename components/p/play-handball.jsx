import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ydqd7bg-l.css';
import '../../css/t/td-ms0blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ydqd7bg-l"/><path class="td-ms0blp"/></g>`,
		"fallback": "tabler:play-handball",
	});
}

export default Component;
