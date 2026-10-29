import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y42lu3wgl.css';
import '../../css/e/e3mqktbid.css';
import '../../css/f/fzsrnccdv.css';
import '../../css/n/n56pybc1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k y42lu3wgl"/><path class="e3mqktbid wm-k"/><path class="fzsrnccdv wm-k"/><path class="n56pybc1x wm-shine"/></g>`,
		"fallback": "withicons-anime:trending-up",
	});
}

export default Component;
