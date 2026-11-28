import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/ff14c9bvq.css';
import '../../css/i/imz4-o04u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ff14c9bvq"/><path class="imz4-o04u"/></g>`,
		"fallback": "iconaut:reply",
	});
}

export default Component;
