import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fxn87v4vx.css';
import '../../css/t/tz1j7bbth.css';
import '../../css/o/ovnv7qxik.css';
import '../../css/o/oivujhbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="fxn87v4vx wm-shadow"/><path class="tz1j7bbth wm-shadow"/><path class="ovnv7qxik"/><path class="oivujhbti"/></g>`,
		"fallback": "withicons-brutal:phone",
	});
}

export default Component;
