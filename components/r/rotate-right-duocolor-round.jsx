import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aztql-b4w.css';
import '../../css/l/lvoahibxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aztql-b4w"/><path class="lvoahibxm"/></g>`,
		"fallback": "coolicons:rotate-right-duocolor-round",
	});
}

export default Component;
