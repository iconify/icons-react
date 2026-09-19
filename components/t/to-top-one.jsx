import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/joo9p7flc.css';
import '../../css/f/ffkj4ccgm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="joo9p7flc"/><path class="ffkj4ccgm"/></g>`,
		"fallback": "icon-park:to-top-one",
	});
}

export default Component;
