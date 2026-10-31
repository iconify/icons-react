import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d5tjzhk8f.css';
import '../../css/x/xjhs-wb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d5tjzhk8f"/><path class="xjhs-wb7m"/></g>`,
		"fallback": "coolicons:printer-duocolor-round",
	});
}

export default Component;
