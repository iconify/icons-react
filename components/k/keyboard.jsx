import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/qhzmkrisu.css';
import '../../css/e/efvthmb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="qhzmkrisu"/><path class="efvthmb2i"/></g>`,
		"fallback": "streamline-sharp-color:keyboard",
	});
}

export default Component;
