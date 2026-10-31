import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/w/wjig-3bde.css';
import '../../css/f/fpauzlpee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="wjig-3bde"/><path class="fpauzlpee"/></g>`,
		"fallback": "streamline-kameleon-color:pencil-2-pop",
	});
}

export default Component;
