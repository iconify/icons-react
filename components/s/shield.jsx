import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/w/w1s23mb7s.css';
import '../../css/m/mwa85c6im.css';
import '../../css/e/ex9ju6btd.css';
import '../../css/b/bc6kks3tc.css';
import '../../css/t/tj4aydbri.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><path class="w1s23mb7s"/><path class="mwa85c6im"/><path class="ex9ju6btd"/><path class="bc6kks3tc"/><path class="tj4aydbri"/></g>`,
		"fallback": "gala:shield",
	});
}

export default Component;
