import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m48elob4l.css';
import '../../css/f/f8q4lmbpa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m48elob4l"/><path class="f8q4lmbpa"/></g>`,
		"fallback": "icon-park-solid:muscle",
	});
}

export default Component;
