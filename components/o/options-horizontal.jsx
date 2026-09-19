import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2dbmfb2b.css';
import '../../css/g/guczw2b4h.css';
import '../../css/o/o43_bebxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2dbmfb2b"/><path class="guczw2b4h"/><path class="o43_bebxp"/>`,
		"fallback": "cil:options-horizontal",
	});
}

export default Component;
