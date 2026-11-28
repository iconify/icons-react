import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgzmasisn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o0fpmnz7u.css';
import '../../css/p/ph-o_tbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sgzmasisn"/><g class="dt0cm9dhy primary"><path class="o0fpmnz7u"/><path class="ph-o_tbwq"/></g>`,
		"fallback": "iconaut:moon-star-duo",
	});
}

export default Component;
