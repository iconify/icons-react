import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gnr3sl8iz.css';
import '../../css/s/smfbkq5iv.css';
import '../../css/a/aefmnnbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gnr3sl8iz"/><path class="smfbkq5iv"/><path class="aefmnnbnd"/></g>`,
		"fallback": "keyline-icons:traffic-light-sharp-two-tone",
	});
}

export default Component;
