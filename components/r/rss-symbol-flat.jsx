import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x90w4fkgc.css';
import '../../css/r/rpcbyh80e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x90w4fkgc"/><path class="rpcbyh80e"/></g>`,
		"fallback": "streamline-sharp-color:rss-symbol-flat",
	});
}

export default Component;
