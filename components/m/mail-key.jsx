import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k1--xxqip.css';
import '../../css/d/dfx0v2ykl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k1--xxqip"/><path class="dfx0v2ykl"/></g>`,
		"fallback": "tabler:mail-key",
	});
}

export default Component;
