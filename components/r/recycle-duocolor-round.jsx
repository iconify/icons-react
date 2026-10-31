import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ec7g9wu4f.css';
import '../../css/p/pq61nfb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ec7g9wu4f"/><path class="pq61nfb5f"/></g>`,
		"fallback": "coolicons:recycle-duocolor-round",
	});
}

export default Component;
