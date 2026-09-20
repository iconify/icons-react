import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fcectbb2r.css';
import '../../css/e/e-m5subgl.css';
import '../../css/k/kyintmbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fcectbb2r"/><path class="e-m5subgl"/><path class="kyintmbtk"/></g>`,
		"fallback": "streamline-ultimate-color:skype-logo",
	});
}

export default Component;
