import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozqscv-4w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d7odni4zo.css';
import '../../css/p/pcozc4xmy.css';
import '../../css/s/sg1dwbdru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozqscv-4w secondary"/><g class="dt0cm9dhy primary"><path class="d7odni4zo"/><path class="pcozc4xmy"/><path class="sg1dwbdru"/></g>`,
		"fallback": "iconaut:milk-duo",
	});
}

export default Component;
