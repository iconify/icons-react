import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xsfyt2h9v.css';
import '../../css/n/ndobplbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xsfyt2h9v"/><path class="ndobplbiz"/></g>`,
		"fallback": "tabler:square-root-2",
	});
}

export default Component;
