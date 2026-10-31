import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xzdh7zb9w.css';
import '../../css/k/kljvt7ivz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xzdh7zb9w"/><path class="kljvt7ivz"/></g>`,
		"fallback": "coolicons:server-duocolor-round",
	});
}

export default Component;
