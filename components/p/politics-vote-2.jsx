import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lahawovus.css';
import '../../css/c/c7gy7_bak.css';
import '../../css/q/qtkg0dbft.css';
import '../../css/s/sridkpbug.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lahawovus"/><path clip-rule="evenodd" class="c7gy7_bak"/><path class="qtkg0dbft"/><path class="sridkpbug"/></g>`,
		"fallback": "streamline-flex-color:politics-vote-2",
	});
}

export default Component;
