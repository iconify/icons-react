import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da0ha9bxt.css';
import '../../css/e/et1rc8bcm.css';
import '../../css/a/a27c73v5e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="da0ha9bxt"/><path class="et1rc8bcm"/><path class="a27c73v5e"/></g>`,
		"fallback": "streamline-color:play-station",
	});
}

export default Component;
