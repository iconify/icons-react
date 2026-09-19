import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dx4nfqbec.css';
import '../../css/k/kz-qpubda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dx4nfqbec"/><path class="kz-qpubda"/></g>`,
		"fallback": "hugeicons:link-off-02",
	});
}

export default Component;
