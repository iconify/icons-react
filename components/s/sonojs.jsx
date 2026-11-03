import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6btxnbno.css';
import '../../css/o/o8-mnxbkx.css';
import '../../css/g/gv6b2xb3v.css';

const viewBox = {"width":24.9,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="m6btxnbno"><path class="o8-mnxbkx"/><path class="gv6b2xb3v"/></g>`,
		"fallback": "thesvg-color:sonojs",
	});
}

export default Component;
