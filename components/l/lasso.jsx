import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vwg62yb_a.css';
import '../../css/p/p12ebw2el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vwg62yb_a"/><circle class="p12ebw2el"/></g>`,
		"fallback": "lucide:lasso",
	});
}

export default Component;
