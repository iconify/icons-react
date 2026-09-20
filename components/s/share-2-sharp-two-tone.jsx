import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oucp_8b-c.css';
import '../../css/j/jqo23jbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="oucp_8b-c"/><path class="jqo23jbzq"/></g>`,
		"fallback": "keyline-icons:share-2-sharp-two-tone",
	});
}

export default Component;
