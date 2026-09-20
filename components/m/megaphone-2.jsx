import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/mkjld6j7s.css';
import '../../css/a/a32l4rb1c.css';
import '../../css/o/ow118d04o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="mkjld6j7s"/><path class="a32l4rb1c"/><path class="ow118d04o"/></g>`,
		"fallback": "streamline-sharp-color:megaphone-2",
	});
}

export default Component;
