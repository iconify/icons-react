import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pl7qk7bwz.css';
import '../../css/a/a0-g48brp.css';
import '../../css/q/q19uih-go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pl7qk7bwz"/><path class="a0-g48brp wm-a"/><path class="q19uih-go"/></g>`,
		"fallback": "withicons:pen-line-duo",
	});
}

export default Component;
