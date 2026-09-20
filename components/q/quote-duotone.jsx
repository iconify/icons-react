import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tti9u7bvi.css';
import '../../css/b/ba138mb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tti9u7bvi"/><path class="ba138mb_t"/></g>`,
		"fallback": "si:quote-duotone",
	});
}

export default Component;
