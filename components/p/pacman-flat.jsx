import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/susrffehd.css';
import '../../css/z/zymjd1wrw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="susrffehd"/><path class="zymjd1wrw"/></g>`,
		"fallback": "streamline-plump-color:pacman-flat",
	});
}

export default Component;
