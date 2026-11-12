import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e0v-75b3u.css';
import '../../css/j/jurinlblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e0v-75b3u"/><path class="jurinlblr"/></g>`,
		"fallback": "tabler:table-question",
	});
}

export default Component;
