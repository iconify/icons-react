import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wo8i_zb8v.css';
import '../../css/d/dqcrjqwfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wo8i_zb8v"/><path class="dqcrjqwfy"/></g>`,
		"fallback": "streamline-plump-color:sd-card-flat",
	});
}

export default Component;
