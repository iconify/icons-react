import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdtwyob5s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/ggubv6whl.css';
import '../../css/f/f9iip8bgg.css';
import '../../css/p/pf73p7kxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdtwyob5s secondary"/><g class="dt0cm9dhy primary"><path class="ggubv6whl"/><path class="f9iip8bgg"/><path class="pf73p7kxe"/></g>`,
		"fallback": "iconaut:pinterest-duo",
	});
}

export default Component;
