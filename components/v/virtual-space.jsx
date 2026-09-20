import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sb41a-fzn.css';
import '../../css/h/h4negl00g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sb41a-fzn"/><path class="h4negl00g"/></g>`,
		"fallback": "tabler:virtual-space",
	});
}

export default Component;
