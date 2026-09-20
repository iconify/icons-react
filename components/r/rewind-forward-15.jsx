import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1iby1bis.css';
import '../../css/m/mwhjjwbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a1iby1bis"/><path class="mwhjjwbtp"/></g>`,
		"fallback": "tabler:rewind-forward-15",
	});
}

export default Component;
