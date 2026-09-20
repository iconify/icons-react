import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/gi18p3fts.css';
import '../../css/h/h51fekbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="gi18p3fts"/><path class="h51fekbtf"/></g>`,
		"fallback": "streamline-sharp-color:pin-1",
	});
}

export default Component;
