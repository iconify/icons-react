import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfx3nk7mg.css';
import '../../css/v/voyu-9ngf.css';
import '../../css/q/q1l0azzvx.css';
import '../../css/z/zlh-73p5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfx3nk7mg"/><path class="voyu-9ngf"/><path class="q1l0azzvx"/><path class="zlh-73p5g"/>`,
		"fallback": "energy-icons:lever-48",
	});
}

export default Component;
