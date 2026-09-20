import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ebhtbyb0q.css';
import '../../css/n/nsadgk2xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ebhtbyb0q"/><path class="nsadgk2xq"/></g>`,
		"fallback": "tabler:mood-wink-2",
	});
}

export default Component;
