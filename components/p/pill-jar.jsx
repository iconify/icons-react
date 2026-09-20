import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ge2va8b1p.css';
import '../../css/x/x0zvlab8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ge2va8b1p"/><path clip-rule="evenodd" class="x0zvlab8e"/></g>`,
		"fallback": "reicon:pill-jar",
	});
}

export default Component;
