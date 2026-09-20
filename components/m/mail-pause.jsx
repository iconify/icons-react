import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgc0-nbfy.css';
import '../../css/d/d5g5amo-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bgc0-nbfy"/><path class="d5g5amo-y"/></g>`,
		"fallback": "tabler:mail-pause",
	});
}

export default Component;
