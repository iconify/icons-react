import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/laso5781b.css';
import '../../css/u/umr8lvcxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="laso5781b"/><path class="umr8lvcxd"/></g>`,
		"fallback": "streamline-sharp-color:volume-sleep",
	});
}

export default Component;
