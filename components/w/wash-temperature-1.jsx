import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dms_ct-jp.css';
import '../../css/s/swvkhlb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dms_ct-jp"/><path class="swvkhlb-q"/></g>`,
		"fallback": "tabler:wash-temperature-1",
	});
}

export default Component;
