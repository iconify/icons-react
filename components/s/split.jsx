import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/alkj0g3as.css';
import '../../css/x/x8u5udbtz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="alkj0g3as"/><rect class="x8u5udbtz"/></g>`,
		"fallback": "icon-park:split",
	});
}

export default Component;
