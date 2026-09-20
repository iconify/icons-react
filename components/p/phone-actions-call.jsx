import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b06rkq0uc.css';
import '../../css/n/n8axbibmh.css';
import '../../css/h/hanyvkbna.css';
import '../../css/v/v9t4l4boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b06rkq0uc"/><path class="n8axbibmh"/><path class="hanyvkbna"/><path class="v9t4l4boi"/></g>`,
		"fallback": "streamline-ultimate-color:phone-actions-call",
	});
}

export default Component;
