import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/u/uzrrtd_qg.css';
import '../../css/t/te117eino.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="uzrrtd_qg"/><path class="te117eino"/></g>`,
		"fallback": "streamline-kameleon-color:reindeer-duo",
	});
}

export default Component;
