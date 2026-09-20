import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qdx3nache.css';
import '../../css/g/gti5-7bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qdx3nache"/><path class="gti5-7bfi"/></g>`,
		"fallback": "tabler:sort-descending-numbers",
	});
}

export default Component;
