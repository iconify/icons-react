import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg47f8bmh.css';
import '../../css/h/h1cjk03ry.css';
import '../../css/c/cei2znwlq.css';
import '../../css/s/sknc2vydc.css';
import '../../css/e/ealapdb6p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qg47f8bmh"/><path class="h1cjk03ry"/><path class="cei2znwlq"/><path class="sknc2vydc"/><path class="ealapdb6p"/></g>`,
		"fallback": "streamline-kameleon-color:lighter-pop",
	});
}

export default Component;
