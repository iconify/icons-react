import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k050hu8av.css';
import '../../css/f/f8q4lmbpa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k050hu8av"/><path class="f8q4lmbpa"/></g>`,
		"fallback": "icon-park-outline:muscle",
	});
}

export default Component;
