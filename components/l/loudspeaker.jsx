import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fk3-ielxk.css';
import '../../css/w/wuh6fv9ys.css';
import '../../css/y/yxtspda5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fk3-ielxk"/><path class="wuh6fv9ys"/><path class="yxtspda5x"/></g>`,
		"fallback": "tdesign:loudspeaker",
	});
}

export default Component;
