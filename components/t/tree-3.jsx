import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/e/e_txy1kaa.css';
import '../../css/i/i8ya54elj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="e_txy1kaa"/><path class="i8ya54elj"/></g>`,
		"fallback": "streamline-sharp-color:tree-3",
	});
}

export default Component;
