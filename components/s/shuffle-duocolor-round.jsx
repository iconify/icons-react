import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kumogieiq.css';
import '../../css/m/md225ib-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kumogieiq"/><path class="md225ib-y"/></g>`,
		"fallback": "coolicons:shuffle-duocolor-round",
	});
}

export default Component;
