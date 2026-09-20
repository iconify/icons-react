import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d67-bubxz.css';
import '../../css/e/etdj58bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d67-bubxz"/><path class="etdj58bqx"/></g>`,
		"fallback": "tabler:map-pinned",
	});
}

export default Component;
