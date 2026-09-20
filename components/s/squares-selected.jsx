import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/olbc_pb1d.css';
import '../../css/l/l5n138ezq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="olbc_pb1d"/><path class="l5n138ezq"/></g>`,
		"fallback": "tabler:squares-selected",
	});
}

export default Component;
