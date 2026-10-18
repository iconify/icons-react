import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l6t3u2ggn.css';
import '../../css/g/glrgxcc8k.css';
import '../../css/b/bl3oy7cao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l6t3u2ggn"/><path class="glrgxcc8k"/><path class="bl3oy7cao"/></g>`,
		"fallback": "vadivam:store",
	});
}

export default Component;
