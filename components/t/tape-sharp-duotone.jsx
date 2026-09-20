import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jyrw3ac3u.css';
import '../../css/j/j8jcxpbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jyrw3ac3u"/><path class="j8jcxpbfq"/></g>`,
		"fallback": "keyline-icons:tape-sharp-duotone",
	});
}

export default Component;
