import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bfyt3-bfi.css';
import '../../css/a/a29p9-_cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bfyt3-bfi"/><path class="a29p9-_cz"/></g>`,
		"fallback": "tabler:page-break",
	});
}

export default Component;
