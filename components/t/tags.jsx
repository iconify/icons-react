import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zm2u1zbyi.css';
import '../../css/y/y5kc5-bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zm2u1zbyi"/><circle class="y5kc5-bbx"/></g>`,
		"fallback": "lucide:tags",
	});
}

export default Component;
