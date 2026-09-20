import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/r7x5le_dt.css';
import '../../css/q/qssaabb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="r7x5le_dt"/><path class="qssaabb0e"/></g>`,
		"fallback": "streamline-sharp-color:warning-shield",
	});
}

export default Component;
