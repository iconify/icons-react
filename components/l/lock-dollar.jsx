import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/btg4eacor.css';
import '../../css/x/xned3bb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="btg4eacor"/><path class="xned3bb2u"/></g>`,
		"fallback": "tabler:lock-dollar",
	});
}

export default Component;
