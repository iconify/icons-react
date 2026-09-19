import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hx-6kdvis.css';
import '../../css/t/t-emj0qgh.css';
import '../../css/n/n35dlibfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hx-6kdvis"/><path class="t-emj0qgh"/><path class="n35dlibfy"/></g>`,
		"fallback": "iconamoon:shield-off-duotone",
	});
}

export default Component;
