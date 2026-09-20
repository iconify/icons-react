import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uwg1cjjcv.css';
import '../../css/h/h_omkp9ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uwg1cjjcv"/><path class="h_omkp9ak"/></g>`,
		"fallback": "tabler:play-card-10",
	});
}

export default Component;
