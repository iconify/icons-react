import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/shxhixp4y.css';
import '../../css/n/ngdypnbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="shxhixp4y"/><path class="ngdypnbsx"/></g>`,
		"fallback": "reicon:logout2-filled",
	});
}

export default Component;
