import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i9nodhb5k.css';
import '../../css/j/j7qjn6psg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i9nodhb5k"/><path class="j7qjn6psg"/></g>`,
		"fallback": "tabler:moon-2",
	});
}

export default Component;
