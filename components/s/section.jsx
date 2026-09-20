import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/ww7-qtgxa.css';
import '../../css/b/ba7bdy0rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ww7-qtgxa"/><path class="ba7bdy0rk"/></g>`,
		"fallback": "lucide:section",
	});
}

export default Component;
