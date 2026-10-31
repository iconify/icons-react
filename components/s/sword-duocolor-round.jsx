import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n7bm7ypnx.css';
import '../../css/b/bmht2mxfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n7bm7ypnx"/><path class="bmht2mxfd"/></g>`,
		"fallback": "coolicons:sword-duocolor-round",
	});
}

export default Component;
