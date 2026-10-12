import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5abnr4hs.css';
import '../../css/a/ag75t-bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5abnr4hs"/><path class="ag75t-bat"/></g>`,
		"fallback": "lucide-extended:layout-grid-circles-duotone",
	});
}

export default Component;
