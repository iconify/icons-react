import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lk2gmgbqk.css';
import '../../css/k/kb53_yb0k.css';
import '../../css/n/n2j9rebrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lk2gmgbqk"/><path class="kb53_yb0k"/><path class="n2j9rebrd"/></g>`,
		"fallback": "iconaut:square-terminal",
	});
}

export default Component;
