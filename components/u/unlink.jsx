import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k9o9xjf6i.css';
import '../../css/g/gjs9f88_s.css';
import '../../css/t/tey93ihjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k9o9xjf6i"/><path class="gjs9f88_s"/><path class="tey93ihjn"/></g>`,
		"fallback": "iconaut:unlink",
	});
}

export default Component;
