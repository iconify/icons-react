import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/schr631qs.css';
import '../../css/q/qshu-ubma.css';
import '../../css/a/aple9obvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="schr631qs"/><path class="qshu-ubma"/><path class="aple9obvx"/></g>`,
		"fallback": "streamline-sharp-color:party-popper",
	});
}

export default Component;
