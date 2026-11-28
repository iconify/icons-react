import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhurrtb2s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o2-_brbuv.css';
import '../../css/k/kxz1mg-ky.css';
import '../../css/l/limh9cbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhurrtb2s secondary"/><g class="dt0cm9dhy primary"><path class="o2-_brbuv"/><path class="kxz1mg-ky"/><path class="limh9cbhi"/></g>`,
		"fallback": "iconaut:magnet-duo",
	});
}

export default Component;
