import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mlgygjnxv.css';
import '../../css/a/ad1pplybg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mlgygjnxv"/><path class="ad1pplybg"/></g>`,
		"fallback": "icon-park-outline:sun-one",
	});
}

export default Component;
