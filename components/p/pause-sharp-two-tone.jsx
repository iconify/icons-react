import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m54ltwzwe.css';
import '../../css/a/a3imwbbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m54ltwzwe"/><path class="a3imwbbgx"/></g>`,
		"fallback": "keyline-icons:pause-sharp-two-tone",
	});
}

export default Component;
