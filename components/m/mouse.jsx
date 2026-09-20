import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqfkc7sdq.css';
import '../../css/e/ewu1xebzy.css';
import '../../css/d/dssx2mbkc.css';
import '../../css/n/np0_htpxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fqfkc7sdq"/><path class="ewu1xebzy"/><path class="dssx2mbkc"/><path class="np0_htpxp"/></g>`,
		"fallback": "streamline-ultimate-color:mouse",
	});
}

export default Component;
