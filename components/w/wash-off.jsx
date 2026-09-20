import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n3mq2qbdv.css';
import '../../css/l/le0vbxbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n3mq2qbdv"/><path class="le0vbxbdc"/></g>`,
		"fallback": "tabler:wash-off",
	});
}

export default Component;
