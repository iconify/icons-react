import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8w5fbcor.css';
import '../../css/n/nelaeyb_y.css';
import '../../css/j/jwmta2bby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8w5fbcor"/><path class="nelaeyb_y"/><path class="jwmta2bby"/></g>`,
		"fallback": "streamline-plump-color:pen-tool-flat",
	});
}

export default Component;
