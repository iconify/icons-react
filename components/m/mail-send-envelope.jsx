import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/u/u82ya9bit.css';
import '../../css/b/bl5cldbpq.css';
import '../../css/b/bsr1fndlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="u82ya9bit"/><path class="bl5cldbpq"/><path class="bsr1fndlm"/></g>`,
		"fallback": "streamline-sharp-color:mail-send-envelope",
	});
}

export default Component;
