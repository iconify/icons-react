import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/plv0bcc_m.css';
import '../../css/a/aezdy9b0j.css';
import '../../css/v/vway3bbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="plv0bcc_m"/><path class="aezdy9b0j"/><path class="vway3bbat"/></g>`,
		"fallback": "streamline-sharp-color:skull-2",
	});
}

export default Component;
