import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n23zu4msj.css';
import '../../css/l/laaqetbhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n23zu4msj"/><path class="laaqetbhf"/></g>`,
		"fallback": "icon-park-outline:remind",
	});
}

export default Component;
