import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-83soh2y.css';
import '../../css/c/cgp9kxg8p.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/a/a0tq5_bzm.css';
import '../../css/d/d7h2j9ugi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-83soh2y"/><path class="cgp9kxg8p"/><path class="xjfc-xbtr"/><path class="a0tq5_bzm"/><path class="d7h2j9ugi"/></g>`,
		"fallback": "streamline-color:smiley-nauseas",
	});
}

export default Component;
