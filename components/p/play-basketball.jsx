import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/frggv_b9o.css';
import '../../css/p/p9yw2ebxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="frggv_b9o"/><path class="p9yw2ebxg"/></g>`,
		"fallback": "tabler:play-basketball",
	});
}

export default Component;
