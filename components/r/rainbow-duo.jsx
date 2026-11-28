import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tn07yfl-o.css';
import '../../css/f/fmgs8jbtv.css';
import '../../css/n/npaxttsgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tn07yfl-o"/><path class="fmgs8jbtv"/><path class="npaxttsgs"/></g>`,
		"fallback": "iconaut:rainbow-duo",
	});
}

export default Component;
