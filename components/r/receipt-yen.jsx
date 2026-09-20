import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-sfe0bwq.css';
import '../../css/b/b97gqjbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p-sfe0bwq"/><path class="b97gqjbro"/></g>`,
		"fallback": "tabler:receipt-yen",
	});
}

export default Component;
