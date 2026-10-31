import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uofenob3g.css';
import '../../css/h/hn2mekz0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uofenob3g"/><path class="hn2mekz0o"/></g>`,
		"fallback": "coolicons:mail-open-duocolor-round",
	});
}

export default Component;
