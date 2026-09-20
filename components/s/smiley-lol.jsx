import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-do6nb9t.css';
import '../../css/x/x8jutkbdj.css';
import '../../css/p/pgxue6zvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-do6nb9t"/><path class="x8jutkbdj"/><path class="pgxue6zvw"/></g>`,
		"fallback": "streamline-freehand-color:smiley-lol",
	});
}

export default Component;
