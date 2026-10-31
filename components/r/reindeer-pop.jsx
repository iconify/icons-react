import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/db273ccix.css';
import '../../css/g/grcyshb6z.css';
import '../../css/q/q1r5hdu2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="db273ccix"/><path class="grcyshb6z"/><path class="q1r5hdu2e"/></g>`,
		"fallback": "streamline-kameleon-color:reindeer-pop",
	});
}

export default Component;
