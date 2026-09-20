import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vu5b036-v.css';
import '../../css/e/eek54qtkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vu5b036-v"/><path class="eek54qtkc"/></g>`,
		"fallback": "tabler:photo-edit",
	});
}

export default Component;
